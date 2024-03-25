import { SideBar, ChatBox } from "../component";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const userId = useSelector((state:RootState)=>state?.auth?.userId)

  useEffect(()=>{
if(userId) navigate("/")
  },[])
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
