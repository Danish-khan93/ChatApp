import { Box,Typography } from "@mui/material";
import { FC } from "react";
import { HeaderForSideBar,UserSearch ,UsersChats} from "../index";
const SideBar: FC = () => {
  return (
    <Box className="px-[20px] flex flex-col justify-between" >
      <Box className="py-[20px]">
        <HeaderForSideBar />
      </Box>
      <Box className="py-[30px]">
        <Typography className="font-semibold text-[#1b1b1b] text-[20px]">Messages</Typography>
      </Box>
      <Box>
        <UserSearch />
      </Box>
      <Box className="overflow-y-auto my-4">
        <UsersChats/>
      </Box>
    </Box>
  );
};

export default SideBar;
