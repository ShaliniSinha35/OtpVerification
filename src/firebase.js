import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnbbUWL1JPIVCb0oZ6YDToaUyX_vm4z0Y",
  authDomain: "otp-verification-8f67b.firebaseapp.com",
  projectId: "otp-verification-8f67b",
  storageBucket: "otp-verification-8f67b.appspot.com",
  messagingSenderId: "582271490763",
  appId: "1:582271490763:web:37cbd3af028baa0d9fd94e",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };
export const firestore = firebase.firestore();

export const storage = firebase.storage();
