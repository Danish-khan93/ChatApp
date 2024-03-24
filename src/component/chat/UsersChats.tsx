import { Box, Typography } from "@mui/material";
import { FC } from "react";
const UsersChats :FC = () => {
  return (
    <Box className="flex gap-7 items-center py-5 border-b border-[#EDEDED] ">
      <Box>
        <Typography
          className="rounded-full"
          component={"img"}
          src="https://picsum.photos/50/50"
        ></Typography>
      </Box>
      <Box>
        <Typography>name</Typography>
      </Box>
    </Box>
  );
};

export default UsersChats;
