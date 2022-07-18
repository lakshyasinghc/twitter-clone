// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import{getFirestore} from "firebase/firestore"; 
import{getStorage} from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-a9049.firebaseapp.com",
  projectId: "twitter-clone-a9049",
  storageBucket: "twitter-clone-a9049.appspot.com",
  messagingSenderId: "874495402881",
  appId: "1:874495402881:web:6bad63315b4ce4b3947e80"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp(); 
const db= getFirestore(); 
const storage = getStorage(); 
export {app,db,storage}; 

// const app = initializeApp(firebaseConfig);