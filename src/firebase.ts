// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWgEI7ZNOE3g1Awtzjn2m_d0x-9B3DlB0",
  authDomain: "chatapp-fd979.firebaseapp.com",
  projectId: "chatapp-fd979",
  storageBucket: "chatapp-fd979.appspot.com",
  messagingSenderId: "191031005483",
  appId: "1:191031005483:web:a1cc505ae92ca92b97756e",
  measurementId: "G-SYYZXVSKNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage() 
// const analytics = getAnalytics(app);