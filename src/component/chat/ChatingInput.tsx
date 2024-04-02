import { Box, IconButton, TextField } from "@mui/material";
import { ChangeEvent, FC, useState, useId } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
// import { v4 as uuid } from "uuid";
import { RootState } from "../../redux/store";
import {
  arrayUnion,
  doc,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const ChatingInput: FC = () => {
  const [text, setText] = useState<string>("");
  const [file, setFlie] = useState<null | any>(null);
  const uuid = useId();
  const userID = useSelector((state: RootState) => state?.chat?.chatId);
  const currentUser = useSelector((state: RootState) => state?.auth?.user);

  const handleSend = async () => {
    try {
      if (file) {
        const storageRef = ref(storage, uuid);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          // @ts-ignore
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                // @ts-ignore
                await updateDoc(doc(db, "chats", userID), {
                  messages: arrayUnion({
                    id: uuid,
                    text,
                    senderId: currentUser?.uid,
                    date: Timestamp.now(),
                    img: downloadURL,
                  }),
                });
              }
            );
          }
        );
      } else {
        // @ts-ignore
        await updateDoc(doc(db, "chats", userID), {
          messages: arrayUnion({
            id: uuid,
            text,
            senderId: currentUser?.uid,
            date: Timestamp.now(),
          }),
        });
      }
      await updateDoc(doc(db, "userChat", currentUser.uid), {
        [userID + ".lastMessage"]: {
          text,
        },
        [userID + ".date"]: serverTimestamp(),
      });
      // @ts-ignore
      await updateDoc(doc(db, "userChat", userID), {
        [userID + ".lastMessage"]: {
          text,
        },
        [userID + ".date"]: serverTimestamp(),
      });

      setText("");
      setFlie(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="w-full p-[20px] bg-[#EDEDED] flex items-center">
      <input
        type="file"
        className="hidden"
        id="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          // @ts-ignore
          setFlie(e?.target?.files[0])
        }
      />
      <label htmlFor="file">
        <AttachFileIcon />
      </label>
      <TextField
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        size="small"
        className="w-full"
        placeholder="new message"
        value={text}
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
