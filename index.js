// Disable right-click context menu
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Disable right-click context menu
});

// Disable specific keyboard shortcuts (e.g., View Source, Developer Tools, etc.)
document.addEventListener("keydown", function(event) {
    // Disable View Source (Ctrl + U)
    if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
        event.preventDefault(); 
    }
    // Disable Developer Tools (Ctrl + Shift + I)
    if (event.ctrlKey && (event.key === "I" || event.key === "i")) {
        event.preventDefault(); 
    }
    // Disable Save As (Ctrl + S)
    if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
        event.preventDefault(); 
    }
    // Disable Print (Ctrl + P)
    if (event.ctrlKey && (event.key === "P" || event.key === "p")) {
        event.preventDefault(); 
    }
});

// Disable text selection and copying
document.body.style.userSelect = "none"; // Disable text selection

// Prevent copying of content
document.addEventListener("copy", function(event) {
    event.preventDefault(); // Disable copy event
});

// Disable dragging of elements
document.addEventListener("dragstart", function(event) {
    event.preventDefault(); // Disable dragging of elements
});

// Prevent F12 key (Developer Tools)
document.addEventListener("keydown", function(event) {
    if (event.key === "F12") {
        event.preventDefault(); // Disable F12 (Developer Tools)
    }
});

// Block right-click and certain key combinations to prevent accessing source code
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        document.body.innerHTML = "<h1>Access Denied</h1>";
        window.location.href = "about:blank";
    }
}, 1000);

