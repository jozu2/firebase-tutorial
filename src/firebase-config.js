import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3tdlJXqu7pLYUf0AXSiEtCKHcUnYVw54",
  authDomain: "my-1st-app-f0773.firebaseapp.com",
  projectId: "my-1st-app-f0773",
  storageBucket: "my-1st-app-f0773.appspot.com",
  messagingSenderId: "238521805770",
  appId: "1:238521805770:web:e846bd0bccb6ab913ffd33",
  measurementId: "G-SS5XXPLWQ4",
};

const appx = initializeApp(firebaseConfig);
export const db = getFirestore(appx);
