import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SIGNUPFORM } from "../types/authTypes";
import { InputField } from "../component";
import { displayNameRules } from "../rules/authRules";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { login } from "../redux/feature/authSlice";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm<SIGNUPFORM>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    navigate("/home");
  }
  },[])
  const onSubmit = async (data: SIGNUPFORM) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      // @ts-ignore
      sessionStorage.setItem("token", response?._tokenResponse?.refreshToken);
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        
        dispatch(login(user));
      });
      navigate("/home");
      console.log(response?.user?.uid);
    } catch (error: any) {
      if (error.code === "auth/invalid-credential")
        toast.error("Please check the Password");
    }
  };

  return (
    <Box className="h-screen w-full flex flex-col gap-7 items-center justify-center ">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 "
      >
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="enter your email "
          control={control}
          rules={displayNameRules}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="enter your Password "
          control={control}
          rules={displayNameRules}
        />

        <Button
          className="bg-[#1b1b1b] w-full hover:bg-[#1b1b1b] text-[16px] text-[#fff] px-[20px]"
          type="submit"
        >
          Login
        </Button>
      </form>
      <Typography>
        If you have not the Account{" "}
        <Link to="/" className="text-blue-500">
          Signup
        </Link>
      </Typography>
      <ToastContainer />
    </Box>
  );
};

export default Login;
