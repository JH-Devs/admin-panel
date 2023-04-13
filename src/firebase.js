import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-b3b3e.firebaseapp.com",
  projectId: "admin-panel-b3b3e",
  storageBucket: "admin-panel-b3b3e.appspot.com",
  messagingSenderId: "426978542840",
  appId: "1:426978542840:web:39df5c8c16eda0876c270d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();