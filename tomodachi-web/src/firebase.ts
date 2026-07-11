// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTa0kZcbTXuYymc0Q0-CX9-73IGirc6nU",
  authDomain: "tomodachi-web.firebaseapp.com",
  projectId: "tomodachi-web",
  storageBucket: "tomodachi-web.firebasestorage.app",
  messagingSenderId: "819396502356",
  appId: "1:819396502356:web:6c44f875f8b7e1afbb9ec1",
  measurementId: "G-321X6D379C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);