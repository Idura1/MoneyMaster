// Function to simulate chatbot responses based on user input
function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");
  
    if (userInput.trim() !== "") {
        chatBox.innerHTML += `<p class="user-message"><b>ඔයා:</b> ${userInput}</p>`;
        document.getElementById("userInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;

        // Generate a response based on the user's input
        setTimeout(() => {
            var botResponse = generateResponse(userInput);
            chatBox.innerHTML += `<p class="bot-message"><b>Sudu AI:</b> ${botResponse}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }
}

// Listen for the "Enter" key to send the message
document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent the default behavior (e.g., form submission)
        sendMessage();
    }
});
function closeWelcomeMessage() {
    var message = document.getElementById("welcome-message");
    message.style.display = "none"; // Hide the welcome message
  }

  function generateResponse(input) {
    // Sinhala Responses
    if (input.includes("හායි") || input.includes("Hi") || input.includes("ඔයාගේ නම මොකද්ද?") || input.includes("What is your name?") || input.includes("ඔබට කුමක් ද?") || input.includes("What can you do?")) {
        if (input.includes("හායි") || input.includes("Hi")) {
            return "ඔබට කුමක් ද? දැනගන්න ඔන ☺️💖 මම AI සුදු!!";
        }
        if (input.includes("ඔයාව හැදුවේ කව්ද") || input.includes("What is your name?")) {
            return "මාව හැදුවේ W.M.IDURA BUDDIKA AI සුදු!/ My name is AI Sudu!";
        }
        if (input.includes("ඔබට කුමක් ද?") || input.includes("What can you do?")) {
            return "මට ඔබේ ප්‍රශ්න වලට උත්තර දෙන්න පුළුවන්! / I can answer your questions!";
        }
    }

    // English Responses
    if (input.includes("Hi") || input.includes("What is your name?") || input.includes("What can you do?") || input.includes("Where are you from?")) {
        if (input.includes("Hi")) {
            return "How can I assist you today? ☺️💖 I am AI Sudu!!";
        }
        if (input.includes("What is your name?")) {
            return "My name is AI Sudu!";
        }
        if (input.includes("What can you do?")) {
            return "I can answer your questions!";
        }
        if (input.includes("Where are you from?")) {
            return "I don't have a physical location!";
        }
    }

    // Hindi Responses
    if (input.includes("नमस्ते") || input.includes("What can you do?") || input.includes("आपका नाम क्या है?") || input.includes("आप कहाँ से हैं?")) {
        if (input.includes("नमस्ते")) {
            return "आपकी मदद कैसे कर सकता हूँ? ☺️💖 मैं AI सुदू हूँ!!";
        }
        if (input.includes("आपका नाम क्या है?")) {
            return "मेरा नाम AI सुदू है!";
        }
        if (input.includes("क्या आप सीखते हैं?")) {
            return "हाँ, मैं हमेशा सीखता और सुधारता हूँ!";
        }
        if (input.includes("आप कहाँ से हैं?")) {
            return "मेरे पास कोई भौतिक स्थान नहीं है!";
        }
    }

    // More responses
    if (input.includes("ඔබට සහය දීමට හැකිද?") || input.includes("Can you help me?") || input.includes("क्या आप मेरी मदद कर सकते हैं?")) {
        if (input.includes("ඔබට සහය දීමට හැකිද?") || input.includes("Can you help me?")) {
            return "ඔව්, මට ඔබට උදව් කරන්න පුළුවන්! / Yes, I can help you!";
        }
        if (input.includes("क्या आप मेरी मदद कर सकते हैं?")) {
            return "हाँ, मैं आपकी मदद कर सकता हूँ!";
        }
    }

    if (input.includes("ඔබ ඉගෙන ගන්නවා?") || input.includes("Do you learn?") || input.includes("क्या आप सीखते हैं?")) {
        if (input.includes("ඔබ ඉගෙන ගන්නවා?") || input.includes("Do you learn?")) {
            return "ඔව්, මට නිතරම ඉගෙන ගන්න පුළුවන්! / Yes, I can always learn!";
        }
        if (input.includes("क्या आप सीखते हैं?")) {
            return "हाँ, मैं हमेशा सीखता और सुधारता हूँ!";
        }
    }

    if (input.includes("ඔබට කුමක් ද?") || input.includes("What is your purpose?") || input.includes("आपका उद्देश्य क्या है?")) {
        if (input.includes("ඔබට කුමක් ද?") || input.includes("What is your purpose?")) {
            return "මට ඔබේ ප්‍රශ්න වලට උත්තර දෙන්නයි! / My purpose is to answer your questions!";
        }
        if (input.includes("आपका उद्देश्य क्या है?")) {
            return "मेरा उद्देश्य आपके सवालों का जवाब देना है!";
        }
    }

    if (input.includes("ඔබ කුමන භාෂාවන් දන්නේ?") || input.includes("What languages do you know?") || input.includes("आप कौन सी भाषाएँ जानते हैं?")) {
        if (input.includes("ඔබ කුමන භාෂාවන් දන්නේ?") || input.includes("What languages do you know?")) {
            return "මට සිංහල, ඉංග්‍රීසි සහ හින්දි භාෂා දැනෙයි! / I know Sinhala, English, and Hindi!";
        }
        if (input.includes("आप कौन सी भाषाएँ जानते हैं?")) {
            return "मैं हिंदी, अंग्रेजी और सिंहला बोल सकता हूँ!";
        }
    }

    // Additional Questions and Responses
    if (input.includes("ඔබ කවදාවත් කාලය මැදෙයි?") || input.includes("Do you ever take breaks?") || input.includes("क्या आप कभी आराम करते हैं?")) {
        if (input.includes("ඔබ කවදාවත් කාලය මැදෙයි?") || input.includes("Do you ever take breaks?")) {
            return "නැහැ, මට අවශ්‍යය නොමැත! / No, I don’t need breaks!";
        }
        if (input.includes("क्या आप कभी आराम करते हैं?")) {
            return "नहीं, मुझे आराम की जरूरत नहीं है!";
        }
    }

    if (input.includes("ඔබ අලුත්ම දේවල් ඉගෙන ගන්නවාද?") || input.includes("Do you learn new things?") || input.includes("क्या आप नई चीजें सीखते हैं?")) {
        if (input.includes("ඔබ අලුත්ම දේවල් ඉගෙන ගන්නවාද?") || input.includes("Do you learn new things?")) {
            return "ඔව්, මට නිතරම අලුත් දේවල් ඉගෙන ගන්න පුළුවන්! / Yes, I can always learn new things!";
        }
        if (input.includes("क्या आप नई चीजें सीखते हैं?")) {
            return "हां, मैं हमेशा नई चीजें सीखता हूं!";
        }
    }

    if (input.includes("ඔබේ පනස්ම වෙලාව කුමක්ද?") || input.includes("What is your favorite time?") || input.includes("आपका पसंदीदा समय क्या है?")) {
        if (input.includes("ඔබේ පනස්ම වෙලාව කුමක්ද?") || input.includes("What is your favorite time?")) {
            return "මට කාලයක් නැත! / I don’t have a favorite time!";
        }
        if (input.includes("आपका पसंदीदा समय क्या है?")) {
            return "मुझे कोई पसंदीदा समय नहीं है!";
        }
    }

    if (input.includes("ඔබට කුමන ක්‍රීඩා කැමතියි?") || input.includes("What sports do you like?") || input.includes("आपको कौन सी खेल पसंद है?")) {
        if (input.includes("ඔබට කුමන ක්‍රීඩා කැමතියි?") || input.includes("What sports do you like?")) {
            return "මට ක්‍රීඩා හෝ රැගෙන යාමක් නැත! / I don’t play sports!";
        }
        if (input.includes("आपको कौन सी खेल पसंद है?")) {
            return "मुझे खेल खेलने का कोई शौक नहीं है!";
        }
    }

    return "Sorry, I didn't understand that. Could you please ask in Sinhala, English, or Hindi?";
}
