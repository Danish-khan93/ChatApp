import { Box, Typography } from "@mui/material";
import { getDoc, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FC } from "react";
type Props = {
  name: string;
  image: string;
  user: any;
};
const UsersChats: FC<Props> = ({ name, image, user }) => {
  const currentUser = useSelector((state: RootState) => state?.auth?.user);
  const handleSelect = async () => {
    // check whether the chat group is exist if not create
    const combineId =
      currentUser?.uid > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));
      console.log(res);
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
          [combineId+".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChat", user?.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURl: currentUser?.photoURL,
          },
          [combineId+".date"]: serverTimestamp()
        });
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Box
      className="flex gap-7 items-center py-5 border-b border-[#EDEDED] "
      onClick={handleSelect}
    >
      <Box>
        <Typography
          className="rounded-full w-[50px] h-[50px]"
          component={"img"}
          src={image}
        ></Typography>
      </Box>
      <Box>
        <Typography>{name}</Typography>
      </Box>
    </Box>
  );
};

export default UsersChats;
