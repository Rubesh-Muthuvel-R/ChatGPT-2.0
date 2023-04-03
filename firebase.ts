import {getApp,getApps,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPZ8vuBZHT-lkixbiU-y7NudpDYSMGR-8",
  authDomain: "chat-gpt-a50d9.firebaseapp.com",
  projectId: "chat-gpt-a50d9",
  storageBucket: "chat-gpt-a50d9.appspot.com",
  messagingSenderId: "442218056876",
  appId: "1:442218056876:web:c385a741a1ebf0da78e309"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};