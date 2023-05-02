// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHpaFIlab6Hktr02_7pgJhu6jyMZVpCvA",
  authDomain: "chef-yard.firebaseapp.com",
  projectId: "chef-yard",
  storageBucket: "chef-yard.appspot.com",
  messagingSenderId: "330568447584",
  appId: "1:330568447584:web:c3b23bebd61d48a5cfb505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 