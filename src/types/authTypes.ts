// form types

export interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  control: any;
  rules: any;
  label: string;
}
export interface PictureProps {
  name: string;
  type: string;
  control: any;
  rules: any;
}

export type SIGNUPFORM = {
  displayName: string;
  email: string;
  password: string;
  profileURL: Blob | Uint8Array | ArrayBuffer;
};

// form types


// authSlice Type 

export type INITIALSTATE = {
isLoggedIn : boolean;
userId : string | "" | null,


}

// authSlice Type 

