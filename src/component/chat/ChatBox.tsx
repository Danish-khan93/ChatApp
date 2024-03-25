import { Box } from "@mui/material";
import { HeaderForChat, ChatingInput, MessagingBox } from "../index";
import { FC } from "react";
const ChatBox: FC = () => {
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
