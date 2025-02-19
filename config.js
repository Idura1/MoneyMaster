import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-performance.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9aZXZBS6GuGZ7mjLpWB32QxZohvhMXIw",
  authDomain: "mm-ai-chat-assistant.firebaseapp.com",
  projectId: "mm-ai-chat-assistant",
  storageBucket: "mm-ai-chat-assistant.appspot.com",
  messagingSenderId: "1083152796519",
  appId: "1:1083152796519:web:542d03c20d84e363e8bdc2",
  measurementId: "G-GEM4QGFW7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics, Auth, Firestore, and Performance Monitoring
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const perf = getPerformance(app);

// Initialize Google and Facebook Auth Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Log to verify initialization
console.log("Firebase initialized:", app);

// Export services for use in other modules
export { app, analytics, auth, db, googleProvider, facebookProvider, perf };
