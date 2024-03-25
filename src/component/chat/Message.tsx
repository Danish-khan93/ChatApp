import { Box, Typography } from "@mui/material";
import { FC } from "react";
const Message : FC = () => {
  return (
    <Box className="flex items-center gap-5 p-[20px]">
      <Box>
        <Typography
          className="rounded-full"
          component={"img"}
          src="https://picsum.photos/50/50"
        ></Typography>
      </Box>
      <Box className="bg-[#1b1b] p-[15px] rounded-r-[20px] rounded-b-[20px]">
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          inventore
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
