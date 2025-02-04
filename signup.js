import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBEFkPWIuISFjV-y-Yp9Zowg_Z_1AWBRkk",
    authDomain: "cross-couture.firebaseapp.com",
    projectId: "cross-couture",
    storageBucket: "cross-couture.firebasestorage.app",
    messagingSenderId: "516919912151",
    appId: "1:516919912151:web:6018daea06b5bb5756f292"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

