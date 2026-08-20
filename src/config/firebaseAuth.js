
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuRfe2SsveE53CB81wYghjKsxqp_Ijnsw",
    authDomain: "swiggy-clone-b2a23.firebaseapp.com",
    projectId: "swiggy-clone-b2a23",
    storageBucket: "swiggy-clone-b2a23.firebasestorage.app",
    messagingSenderId: "848789520481",
    appId: "1:848789520481:web:7448e0fb68ff469a896a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }