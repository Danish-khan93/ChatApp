import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const ChatingInput: FC = () => {
  return (
    <Box className="w-full p-[20px] bg-[#EDEDED] flex ">
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <TextField
        size="small"
        className="w-full"
        placeholder="new message"
        //   onChange={changeHandler}
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderWidth: "0px",
            },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px",
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#EDEDED", // Change the background color to red
          },
        }}
      />

      <IconButton>
        <EmojiEmotionsIcon />
      </IconButton>
      <IconButton>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatingInput;
