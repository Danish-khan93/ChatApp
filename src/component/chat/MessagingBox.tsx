import { FC } from "react";
import { Box } from "@mui/material";
import { Message } from "..";
import { useEffect,useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const MessagingBox: FC = () => {
const [message,setMessages] = useState([])
  const chatID = useSelector((state:RootState)=>state?.chat?.chatId)


  useEffect(()=>{
    // @ts-ignore
const unsub = onSnapshot(doc(db,"chats",chatID),(doc)=>{
  // @ts-ignore
  doc.exists() && setMessages(doc.data().messages)
})

return ()=>{
  unsub()
}
  },[chatID])
  return (
    <Box style={{ height: "calc(100vh - 170px)", overflowY: "auto" }}>
      {
        message.map((value,index)=>{
          return (
            
            <Message  message={value} key={index}/>
          )
        })
      }
      
     
    </Box>
  );
};

export default MessagingBox;
