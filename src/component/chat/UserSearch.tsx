import { Typography, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { UsersChats } from "..";

const UserSearch: FC = () => {
  const [text, setText] = useState("");
  const [chatUser, setChatUser] = useState<any>({});
  const [err, setErr] = useState<boolean>(false);

  const changeHandler = async () => {
    const q = query(collection(db, "user"), where("displayName", "==", text));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setChatUser(doc.data());
        console.log(doc.id, " => ", doc.data());
      });




    } catch (error) {
      setErr(true);
      console.log("error", error);
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
        {chatUser && (
          <UsersChats name={chatUser?.displayName} image={chatUser?.photoURL} user={chatUser}/>
        )}
      </Box>
      <Box>{err && <Typography>user not found</Typography>}</Box>
    </>
  );
};

export default UserSearch;
