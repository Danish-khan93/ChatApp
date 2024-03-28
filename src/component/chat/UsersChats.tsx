import { Box, Typography } from "@mui/material";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const UsersChats: FC = () => {
  const currentUser = useSelector((state: RootState) => state?.auth?.user);
  const [chat, setChat] = useState([]);
console.log(chat);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChat", currentUser?.uid), (doc) => {
        // @ts-ignore
        console.log(doc.data());
        
        setChat(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);

  return (
    <>
      {Object.entries(chat).map((value:any) => {
        return (
          <Box key={value[0]}
            className="flex gap-7 items-center py-5 border-b border-[#EDEDED] "
            // onClick={handleSelect}
          >
            <Box>
              <Typography
                className="rounded-full w-[50px] h-[50px]"
                component={"img"}
                src={value[1]?.userInfo?.photoURL}
              ></Typography>
            </Box>
            <Box>
              <Typography>{value[1]?.userInfo?.displayName}</Typography>
              <Typography>{value[1]?.userInfo?.lastMessage?.text}</Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default UsersChats;
