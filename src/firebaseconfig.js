import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVZURkSbdfpEzJPka6ydK_rcIid_YeuaA",
  authDomain: "menoscaosxfavor.firebaseapp.com",
  projectId: "menoscaosxfavor",
  storageBucket: "menoscaosxfavor.appspot.com",
  messagingSenderId: "1044870555490",
  appId: "1:1044870555490:web:3ba9220a1c64211c082e3b",
  measurementId: "G-5HY09LG96F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseConfig;
