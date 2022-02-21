import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ8jMvxebuwzIv2bPX1D_CVft1lMSAHEY",
  authDomain: "auth-54819.firebaseapp.com",
  projectId: "auth-54819",
  storageBucket: "auth-54819.appspot.com",
  messagingSenderId: "1077507177893",
  appId: "1:1077507177893:web:8117a4e6bd07d50d53fc4c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
