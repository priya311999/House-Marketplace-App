// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXJHXwiRSIJuwkySc4bXt_20Kmtlpolxc",
  authDomain: "house-marketplace-d0a32.firebaseapp.com",
  projectId: "house-marketplace-d0a32",
  storageBucket: "house-marketplace-d0a32.appspot.com",
  messagingSenderId: "764673236503",
  appId: "1:764673236503:web:bf6cef3561c536941a0652"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()