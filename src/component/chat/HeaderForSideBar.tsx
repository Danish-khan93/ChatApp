import { Box, Typography, Button } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { FC } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logOut } from "../../redux/feature/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const HeaderForSideBar: FC = () => {
  const currentuser = useSelector((state:RootState)=>state?.auth?.user)
  const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate()
  const handleLogout = () => {
    signOut(auth);
    dispatch(logOut());
    sessionStorage.clear()
    navigate("/")
  };
  return (
    <Box className="flex justify-between items-center w-full">
      <Box className="flex justify-around gap-4">
        <Box>
          <Typography
            className="rounded-full w-[50px] h-[50px]"
            component={"img"}
            src={currentuser?.photoURL}
          ></Typography>
        </Box>
        <Box>
          <Typography className="font-semibold">{currentuser?.displayName}</Typography>
          <Typography>id</Typography>
        </Box>
      </Box>
      <Box className="flex items-center">
        <Button
          className="bg-[#1b1b1b] w-full hover:bg-[#1b1b1b] text-[12px] text-[#fff] px-[10px]"
          onClick={handleLogout}
        >
          logOut
        </Button>
        <Typography>
          <NotificationsNoneIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderForSideBar;
