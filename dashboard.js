
// dashboard.js
import { auth } from './config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("userEmail").textContent = `Signed in as: ${user.email}`;
  } else {
    window.location.href = "login.html"; // Redirect if not authenticated
  }
});

document.getElementById("signOutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html"; // Redirect after sign out
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
