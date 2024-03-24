import { FC } from "react";
import { useForm } from "react-hook-form";
import { SIGNUPFORM } from "../types/authTypes";
import { InputField, PicturUpload } from "../component";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  displayNameRules,
  passwordRules,
  emailRules,
  profilePicRules,
} from "../rules/authRules";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { login } from "../redux/feature/authSlice";

const Signup: FC = () => {
  //  dispatch
  const dispatch = useDispatch<AppDispatch>();
  // navigate
  const navigate = useNavigate();
  // redux state
  const userLoggein = useSelector((state: RootState) => state?.auth?.userId);
  const { control, handleSubmit } = useForm<SIGNUPFORM>({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      profileURL: [],
    },
  });

  const onSubmit = async (data: SIGNUPFORM) => {
    console.log(data);

    try {
      // firebase auth
      const response = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );

      // profile pic firebase storage
      const profilePicRef = ref(storage, `${data?.displayName}/${Date.now()}`);
      await uploadBytesResumable(profilePicRef, data?.profileURL).then(() => {
        getDownloadURL(profilePicRef).then(async (downloadURL) => {
          try {
            // making user collection in cloud firestore
            // create new user collection
            await setDoc(doc(db, "user", response?.user?.uid), {
              uid: response?.user?.uid,
              displayName: data?.displayName,
              email: data?.email,
              photoURL: downloadURL,
            });
            dispatch(login(response?.user?.uid));
            if (userLoggein !== "") {
              navigate("/home");
            } else {
              navigate("/");
            }
          } catch (error) {
            console.log("File available error at", error);
          }
        });
      });
    } catch (error: any) {
      if (error?.code === "auth/email-already-in-use")
        toast?.error("Email is Already in use");
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
          name="displayName"
          type="text"
          placeholder="enter your name "
          control={control}
          label="Name"
          rules={displayNameRules}
        />
        <InputField
          name="email"
          type="email"
          placeholder="enter your email "
          control={control}
          label="Email"
          rules={emailRules}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="enter your Password "
          control={control}
          rules={passwordRules}
        />
        <PicturUpload
          name="profileURL"
          rules={profilePicRules}
          type="file"
          control={control}
        />

        <Button
          className="bg-[#1b1b1b] w-full hover:bg-[#1b1b1b] text-[16px] text-[#fff] px-[20px]"
          type="submit"
        >
          Signup
        </Button>
      </form>
      <ToastContainer />
      <Typography>
        If you have Already Account{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default Signup;
