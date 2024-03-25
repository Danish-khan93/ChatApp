import { FC } from "react";
import { Box } from "@mui/material";
import { Message } from "..";
const MessagingBox: FC = () => {
  return (
    <Box style={{ height: "calc(100vh - 170px)", overflowY: "auto" }}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
     
    </Box>
  );
};

export default MessagingBox;
