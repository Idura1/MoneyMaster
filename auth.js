import { auth, googleProvider, facebookProvider } from './config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signInBtn = document.getElementById("signInBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const googleSignInBtn = document.getElementById("googleSignInBtn");
  const facebookSignInBtn = document.getElementById("facebookSignInBtn");
  const resetPasswordBtn = document.getElementById("resetPassword");
  const signOutBtn = document.getElementById("signOut");
  const authForm = document.getElementById("authForm");
  const userEmail = document.getElementById("userEmail");

  // Prevent default form submission
  authForm?.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // Sign In with Email and Password
  signInBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully.");
      window.location.href = "dashboard.html";  // Redirect after sign-in
    } catch (error) {
      handleError(error);
    }
  });

  // Sign Up with Email and Password
  signUpBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully.");
      window.location.href = "dashboard.html";  // Redirect after sign-up
    } catch (error) {
      handleError(error);
    }
  });

  // Sign In with Google
  googleSignInBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful.");
      window.location.href = "dashboard.html";
    } catch (error) {
      handleError(error);
    }
  });

  // Sign In with Facebook
  facebookSignInBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("Facebook sign-in successful.");
      window.location.href = "dashboard.html";
    } catch (error) {
      handleError(error);
    }
  });

  // Send Password Reset Email
  resetPasswordBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let email = emailInput ? emailInput.value.trim() : "";

    if (!email) {
      email = prompt("Enter your email address to reset your password:");
    }

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent successfully. Check your inbox.");
    } catch (error) {
      handleError(error);
    }
  });

  // Handle Firebase Authentication errors
  function handleError(error) {
    let errorMessage = "An error occurred. Please try again.";
    switch (error.code) {
      case 'auth/invalid-credential':
        errorMessage = "Invalid credentials. Please check your email and password.";
        break;
      case 'auth/user-not-found':
        errorMessage = "No account found with this email address. Please sign up.";
        break;
      case 'auth/wrong-password':
        errorMessage = "Incorrect password. Please try again.";
        break;
      case 'auth/invalid-email':
        errorMessage = "Invalid email address format.";
        break;
      case 'auth/network-request-failed':
        errorMessage = "Network error. Please check your connection.";
        break;
      case 'auth/email-already-in-use':
        errorMessage = "Email is already in use. Please sign in instead.";
        break;
      case 'auth/weak-password':
        errorMessage = "Password is too weak. Please choose a stronger password.";
        break;
    }
    console.error("Error details:", error);
    alert("Error: " + errorMessage);
  }

  // Sign Out functionality
  signOutBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log("User signed out.");
      window.location.href = "index.html";  // Redirect to login page after sign out
    } catch (error) {
      alert("Error signing out: " + error.message);
    }
  });

  // Monitor Auth State Changes
  onAuthStateChanged(auth, user => {
    if (user) {
      if (userEmail) {
        userEmail.textContent = `Email: ${user.email}`;
      }
    } else {
      if (window.location.pathname !== "/index.html") {
        window.location.href = "index.html";
      }
    }
  });
});

