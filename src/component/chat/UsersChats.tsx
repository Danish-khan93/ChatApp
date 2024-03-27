import { Box, Typography } from "@mui/material";
import { FC } from "react";
type Props ={
  name:string;
  image:string;
}
const UsersChats :FC<Props> = ({name,image}) => {
  return (
    <Box className="flex gap-7 items-center py-5 border-b border-[#EDEDED] ">
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
