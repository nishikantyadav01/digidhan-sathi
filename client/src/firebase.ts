import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALMsz5V0aNaYjbY-caWaYy2GX-xfR9nQ0",
  authDomain: "financial-management-app-66df1.firebaseapp.com",
  projectId: "financial-management-app-66df1",
  storageBucket: "financial-management-app-66df1.firebasestorage.app",
  messagingSenderId: "32478232575",
  appId: "1:32478232575:web:5b632997e9338e0d5231ca",
  measurementId: "G-70M2L2GTBZ",
};

// Initialize Firebase App
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore with explicit types
const auth: Auth = getAuth(app);
const firestore: Firestore = getFirestore(app);

export { app, auth, firestore };
