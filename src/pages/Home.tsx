import { useEffect } from "react";
import { SideBar, ChatBox } from "../component";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const isLoggedin = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  useEffect(() => {
    if (sessionStorage.getItem("token")== null && isLoggedin== false) {
      navigate("/login") ;
    } else {
      navigate("/home") ;
      
    }
  }, []);


  return (
    <Box className="flex ">
      <Box className="w-[30%]">
        <SideBar />
      </Box>
      <Box className="w-[70%]">
        <ChatBox />
      </Box>
    </Box>
  );
};

export default Home;
