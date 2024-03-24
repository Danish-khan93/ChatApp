import { Box, Typography } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { FC } from "react";
const HeaderForSideBar: FC = () => {
  return (
    <Box className="flex justify-between items-center w-full">
      <Box  className="flex justify-around gap-4">
        <Box>
          <Typography className="rounded-full" component={"img"} src="https://picsum.photos/50/50"></Typography>
        </Box>
        <Box>
          <Typography className="font-semibold">name</Typography>
          <Typography>id</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>
          <NotificationsNoneIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderForSideBar;
