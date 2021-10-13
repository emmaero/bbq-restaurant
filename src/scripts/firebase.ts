// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkf5Xx0SySuN9Jjnv1vwkpWJJP7pAEbAs",
  authDomain: "bbq-halmstad.firebaseapp.com",
  projectId: "bbq-halmstad",
  storageBucket: "bbq-halmstad.appspot.com",
  messagingSenderId: "768853292356",
  appId: "1:768853292356:web:6d81505a646622faf65311",
};

// Initialize Firebase
const firebaseInstance = initializeApp(firebaseConfig);

export const fireStoreDatabase = getFirestore(firebaseInstance);
export const cloudStorageReference = getStorage(firebaseInstance);