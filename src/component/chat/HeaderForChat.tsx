import { Box, Typography } from "@mui/material";
// import { ChatMenu } from "../index";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FC } from "react";
const HeaderForChat: FC = () => {
  const chatUser = useSelector((state: RootState) => state?.chat.user.user);

  return (
    <Box className="flex justify-between items-center w-full bg-[#329A93] p-[20px]">
      <Box className="flex justify-around items-center gap-4">
        <Box>
          <Typography
            className="rounded-full w-[50px] h-[50px]"
            component={"img"}
            src={chatUser?.photoURl}
          ></Typography>
        </Box>
        <Box>
          <Typography className="text-[#fff] font-semibold">
            {chatUser?.displayName}
          </Typography>
        </Box>
      </Box>
      <Box>
        {/* <ChatMenu children={<MoreVertIcon/>} menuItem={["profile","clear Chat"]}/> */}
      </Box>
    </Box>
  );
};

export default HeaderForChat;
