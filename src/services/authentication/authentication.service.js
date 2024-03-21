import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDN1aqJ-JhR-b_DNuuqJsKMI7mDzVXLAN8",
    authDomain: "meals-on-wheels-9317f.firebaseapp.com",
    projectId: "meals-on-wheels-9317f",
    storageBucket: "meals-on-wheels-9317f.appspot.com",
    messagingSenderId: "581735937926",
    appId: "1:581735937926:web:aada17873d4dffdfb0de07",
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
