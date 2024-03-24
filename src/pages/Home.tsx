import { SideBar, ChatBox } from "../component";
import { Box } from "@mui/material";
const Home = () => {
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
