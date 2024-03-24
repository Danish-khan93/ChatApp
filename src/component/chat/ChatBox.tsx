import { Box } from "@mui/material";
import { HeaderForChat,ChatingInput } from "../index";
import { FC } from "react";
const ChatBox:FC = () => {
  return (
    
    <Box className="w-full border-l-4 border-indigo-500 ">
      <Box >
        <HeaderForChat />
      </Box>
      <Box>
        <ChatingInput/>
      </Box>
    </Box>
  );
};

export default ChatBox;
