import { Typography, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const UserSearch: FC = () => {
  const [text, setText] = useState("");
  const [user, setUser] = useState<any>(null);

  const [err, setErr] = useState<boolean>(false);
  const currentUser = useSelector((state: RootState) => state?.auth?.user);

  const changeHandler = async () => {
    const q = query(collection(db, "user"), where("displayName", "==", text));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
      console.log("error", error);
    }
  };

  const handleSelect = async () => {
    // check whether the chat group is exist if not create
    const combineId =
      currentUser?.uid > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));

      if (!res?.exists()) {
        // create chat
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        // create user chats

        await updateDoc(doc(db, "userChat", currentUser?.uid), {
          [combineId + ".userInfo"]: {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURl: user?.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChat", user?.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURl: currentUser?.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log("err", error);
      setUser(null);
      setText("");
    }
  };

  const handleKey = (e: any) => {
    e.code === "Enter" && changeHandler();
  };

  return (
    <>
      <TextField
        size="small"
        className="w-full"
        placeholder="Search Chats"
        value={text}
        onChange={(e) => {
          setText(e?.target?.value);
        }}
        onKeyDown={handleKey}
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#B5C0D0", // Change the color to your desired color
            },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#EDEDED", // Change the background color to red
          },
        }}
        InputProps={{
          style: { borderRadius: "15px" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box>
        {user && (
          <Box
            className="flex gap-7 items-center py-5 border-b border-[#EDEDED] "
            onClick={handleSelect}
          >
            <Box>
              <Typography
                className="rounded-full w-[50px] h-[50px]"
                component={"img"}
                src={user?.photoURL}
              ></Typography>
            </Box>
            <Box>
              <Typography>{user?.displayName}</Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Box>{err && <Typography>user not found</Typography>}</Box>
    </>
  );
};

export default UserSearch;
