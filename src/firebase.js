import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIy-m7OPltcYm_ZTyWIj6VnDx6fQnp6zM",
  authDomain: "basic-netflix-99d30.firebaseapp.com",
  projectId: "basic-netflix-99d30",
  storageBucket: "basic-netflix-99d30.appspot.com",
  messagingSenderId: "116232164818",
  appId: "1:116232164818:web:8be823c930cf8b8637a40b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)