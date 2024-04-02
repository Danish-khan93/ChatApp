import { Box, Typography } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
type Prop = {
  message: any;
};
const Message: FC<Prop> = ({ message }) => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const data = useSelector((state: RootState) => state.chat.user);

  const ref = useRef();
  useEffect(() => {
    // @ts-ignore
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <Box
      ref={ref}
      className={`flex items-center gap-5 p-[20px] ${
        message.senderId === currentUser.uid ? "flex-row-reverse" : ""
      }`}
    >
      <Box>
        <Typography
          className="rounded-full w-[50px] h-[50px]"
          component={"img"}
          src={
            message.senderId === currentUser.uid
              ? currentUser?.photoURL
              : data?.user?.photoURl
          }
        ></Typography>
      </Box>
      <Box
        className={`${
          message.senderId === currentUser.uid
            ? "bg-[#1b1b] p-[15px] rounded-l-[20px] rounded-b-[20px]"
            : "bg-[#1b1b] p-[15px] rounded-r-[20px] rounded-b-[20px]"
        } `}
      >
        <Typography>
          {message.text}
          {message.img && (
            <img className="w-[100px] h-[100px]" src={message.img} alt="" />
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
