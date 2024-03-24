import { PictureProps } from "../../types/authTypes";
import { FC } from "react";
import { Controller } from "react-hook-form";
import AddAvator from "../../assets/addAvatar.png";
import { Box } from "@mui/material";
const ImageUploader: FC<PictureProps> = (props) => {
  const { name, rules, control, type } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <Box>
            <input
              className="hidden"
              name={name}
              type={type}
              onChange={(e)=>onChange(e?.target?.files)}
              id="file"
            />
            <label className="flex gap-2 items-center" htmlFor="file">
              <img src={AddAvator} alt="image upload image " />
              <span className="text-[16] text-[#1b1b1b]">
                Upload your picture
              </span>
            </label>
            <p className="text-[12px] text-red-700">{error?.message}</p>
          </Box>
        );
      }}
    />
  );
};

export default ImageUploader;
