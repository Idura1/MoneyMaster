import { auth, googleProvider, facebookProvider } from './config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
const googleSignInBtn = document.getElementById("googleSignInBtn");
const facebookSignInBtn = document.getElementById("facebookSignInBtn");
const resetPasswordBtn = document.getElementById("resetPassword");
const signOutBtn = document.getElementById("signOut");

// Prevent form submission
const authForm = document.getElementById("authForm");
authForm?.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Sign In with Email and Password
signInBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully.");
    window.location.href = "dashboard.html";  // Redirect to dashboard after sign-in
  } catch (error) {
    handleError(error);  // Handle the error with a more specific message
  }
});

// Sign Up with Email and Password
signUpBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully.");
    window.location.href = "dashboard.html";  // Redirect to dashboard after sign-up
  } catch (error) {
    handleError(error);  // Handle the error with a more specific message
  }
});

// Sign In with Google
googleSignInBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signInWithPopup(auth, googleProvider);
    console.log("Google sign-in successful.");
    window.location.href = "dashboard.html";  // Redirect to dashboard after Google sign-in
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
    window.location.href = "dashboard.html";  // Redirect to dashboard after Facebook sign-in
  } catch (error) {
    handleError(error);
  }
});

// Send Password Reset Email
resetPasswordBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = auth.currentUser?.email;
  if (email) {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent successfully.");
    } catch (error) {
      handleError(error);
    }
  } else {
    alert("No user is currently signed in.");
  }
});

// Handle Firebase Authentication errors
function handleError(error) {
  let errorMessage = "An error occurred. Please try again.";

  if (error.code === 'auth/invalid-credential') {
    errorMessage = "Invalid credentials. Please check your email and password.";
  } else if (error.code === 'auth/user-not-found') {
    errorMessage = "No account found with this email address. Please sign up.";
  } else if (error.code === 'auth/wrong-password') {
    errorMessage = "Incorrect password. Please try again.";
  } else if (error.code === 'auth/invalid-email') {
    errorMessage = "Invalid email address format.";
  } else if (error.code === 'auth/network-request-failed') {
    errorMessage = "Network error. Please check your connection.";
  }

  console.error("Error details:", error); // Debugging error details in console
  alert("Error: " + errorMessage); // Display the error message to the user
}

// Optional: Sign out functionality
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

document.addEventListener('DOMContentLoaded', function() {
  const userEmail = document.getElementById('userEmail');
  const signOutBtn = document.getElementById('signOut');

  onAuthStateChanged(auth, user => {
    if (user) {
      userEmail.textContent = `Email: ${user.email}`;
    } else {
      window.location.href = 'index.html';
    }
  });

  signOutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
      window.location.href = 'index.html';
    });
  });
});
