import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN5fIUEz4m3TfleYX_D1jwbaem4CoburQ",
  authDomain: "uap-community-8a67f.firebaseapp.com",
  projectId: "uap-community-8a67f",
  storageBucket: "uap-community-8a67f.appspot.com",
  messagingSenderId: "723082950417",
  appId: "1:723082950417:web:d754caf908c1730e6f3eb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();

export const db = getFirestore(app);
