import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxtO9CTImtGHmmRIrFxvwj28USnmnDA6g",
    authDomain: "ecoder-79920.firebaseapp.com",
    projectId: "ecoder-79920",
    storageBucket: "ecoder-79920.appspot.com",
    messagingSenderId: "675484192154",
    appId: "1:675484192154:web:5f5f3ff75682d0a07a7e23"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)