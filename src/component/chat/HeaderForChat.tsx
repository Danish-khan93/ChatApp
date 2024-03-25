import { Box, Typography } from "@mui/material";
import {ChatMenu} from "../index"

import { FC } from "react";
const HeaderForChat: FC = () => {
  return (
    <Box className="flex justify-between items-center w-full bg-[#329A93] p-[20px]">
      <Box className="flex justify-around items-center gap-4">
        <Box>
          <Typography
            className="rounded-full"
            component={"img"}
            src="https://picsum.photos/50/50"
          ></Typography>
        </Box>
        <Box>
          <Typography className="text-[#fff] font-semibold">name</Typography>
        </Box>
      </Box>
      <Box>
        <ChatMenu/>
      
      </Box>
    </Box>
  );
};

export default HeaderForChat;
