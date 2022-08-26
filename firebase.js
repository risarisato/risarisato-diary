// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_GfJu6NCppjTtrVknG7pn5nBdIypJcG0",
  authDomain: "risarisato-diary.firebaseapp.com",
  projectId: "risarisato-diary",
  storageBucket: "risarisato-diary.appspot.com",
  messagingSenderId: "389162757381",
  appId: "1:389162757381:web:dc9b1480e631f7f6911b6c",
  measurementId: "G-SNW8DPK4M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
    const analytics = getAnalytics(app);
}