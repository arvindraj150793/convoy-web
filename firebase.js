import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPIcxQdvlYHV2qHZP4TMCdAROuVDY24i4",
  authDomain: "convoy-1c0bc.firebaseapp.com",
  projectId: "convoy-1c0bc",
  storageBucket: "convoy-1c0bc.appspot.com",
  messagingSenderId: "113974391001",
  appId: "1:113974391001:web:defaede5496de69d5f0ec8",
  measurementId: "G-2EYKEK2XL4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);