import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FC } from "react";
import { InputFieldProps } from "../../types/authTypes";

const InputField: FC<InputFieldProps> = (props) => {
  const { name, control, rules, placeholder, type ,label} = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <TextField
          label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default InputField;
