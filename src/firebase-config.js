import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwT6acU7yqUaWFhrxMpka7Yuws1vQ9wks",
  authDomain: "fir-blog-16775.firebaseapp.com",
  projectId: "fir-blog-16775",
  storageBucket: "fir-blog-16775.appspot.com",
  messagingSenderId: "554594218430",
  appId: "1:554594218430:web:0b55c3b95ca901c5ef89ef",
  measurementId: "G-F4KB3CDKWJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
