import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0lpUtIW4mcH_m5m6wXXrtBGgWa29fneo",
  authDomain: "moviewatchlist-5df1a.firebaseapp.com",
  projectId: "moviewatchlist-5df1a",
  storageBucket: "moviewatchlist-5df1a.firebasestorage.app",
  messagingSenderId: "721801803512",
  appId: "1:721801803512:web:5c130d56eacedd39daad0d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

