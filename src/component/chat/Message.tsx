import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
type Prop ={
  message: any
}
const Message : FC<Prop> = ({message}) => {
  console.log(message);
  const currentUser = useSelector((state:RootState)=> state.auth.user)


  return (
    <Box className="flex items-center gap-5 p-[20px]">
      <Box>
        <Typography
          className="rounded-full w-[50px] h-[50px]"
          component={"img"}
          src="https://picsum.photos/50/50"
        ></Typography>
      </Box>
      <Box className="bg-[#1b1b] p-[15px] rounded-r-[20px] rounded-b-[20px]">
        <Typography>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
