import { Box, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const ChatingInput: FC = () => {
  const [text, setText] = useState<string>("");
  const [file, setFlie] = useState<null | any>(null);

  const userID = useSelector((state: RootState) => state?.chat?.chatId);
  const currentUser = useSelector((state: RootState) => state?.auth?.user);

  const handleSend = async () => {
    console.log("send message");
    if (file) {
      const storageRef = ref(storage, uuidv4);
      const uploadTask = uploadBytesResumable(storageRef, file);
    } else {
      await updateDoc(doc(db, "chats", userID), {
        messages: arrayUnion({
          id: uuidv4,
          text,
          senderId: currentUser?.uid,
          date: Date.now(),
        }),
      });
    }
  };

  return (
    <Box className="w-full p-[20px] bg-[#EDEDED] flex items-center">
      <input
        type="file"
        className="hidden"
        id="file"
        // @ts-ignore
        onChange={(e) => setFlie(e?.target?.files[0])}
      />
      <label htmlFor="file">
        <AttachFileIcon />
      </label>
      <TextField
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
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
      <IconButton onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatingInput;
