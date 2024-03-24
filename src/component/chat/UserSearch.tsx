import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";
const UserSearch: FC = () => {
  const [text, setText] = useState("");
 console.log(text);
 
 
 const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
setText(e?.target?.value)
 }
 
  return (
    <TextField
      size="small"
      className="w-full"
      placeholder="Search Chats"
      onChange={changeHandler}
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#B5C0D0", // Change the color to your desired color
          },
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#EDEDED", // Change the background color to red
        },
      }}
      InputProps={{
        style: { borderRadius: "15px" },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default UserSearch;
