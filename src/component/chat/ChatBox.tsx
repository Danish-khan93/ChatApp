import { Box } from "@mui/material";
import { HeaderForChat, ChatingInput, MessagingBox } from "../index";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const ChatBox: FC = () => {

const chatingUserBox = useSelector((state:RootState)=>{
  return state?.chat?.chatId
})

if (!chatingUserBox){
  return <div>wellcom to chat app</div>
}

  return (
    <Box className="w-full h-screen border-l-4 border-indigo-500 flex flex-col justify-between">
      <Box>
        <HeaderForChat />
      </Box>
      <Box>
        <MessagingBox />
      </Box>
      <Box>
        <ChatingInput />
      </Box>
    </Box>
  );
};

export default ChatBox;
