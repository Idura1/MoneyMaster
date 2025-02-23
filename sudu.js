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
if (input.includes("පාලුව මකා ගන්න කරන්න පුලුවන්  දෙවල් මොනවද ? ") || input.includes("Can you help me?") || input.includes("क्या आप मेरी मदद कर सकते हैं?")) {
    if (input.includes("පාලුව මකාගන්න පුලුවන් ක්‍රම ගොඩක් තියෙනවා. ඔයාට කැමති, හිතට ගැලපෙන එකක් හොයලා බලන්න.\n\nමානසික පාලුවට:\n\n1. නව දේවල් ඉගෙන ගන්න – නව භාෂාවක්, විශේෂ දැනුමක් හෝ හැකියාවක් ඉගෙන ගන්න.\n\n2. පාඩම් කරන්න / වැඩි දැනුමක් ලබා ගන්න – ගිහිගෙදර හෝ වෘත්තියට අදාල නව දෙයක් හොයාගෙන ඉගෙන ගන්න.\n\n3. බලන්න, අහන්න, කියවන්න – චිත්‍රපට, නාට්‍ය, පොත්, පොඩි කතා (short stories), podcast අහන්න.\n\n4. සන්සුන් වෙන්න – ජීවිතේ ගැන හිතන්න, journaling කරන්න, ස්වයං ප්‍රතිපල ගැන හෝ අදහස් ලියන්න.\n\n5. නව මිතුරන් හෝ සබඳතා ගොඩනගන්න – Discord, Telegram, Facebook වගේ තැන්වලින් ලෝකයේ වෙනත් මිනිස්සුන් එක්ක සම්බන්ධ වෙන්න.\n\nභෞතික පාලුවට:\n\n1. ගොඩක් කාර්යබහුල වෙන්න – වැඩ කරන එක, project එකක් කරලා බැලීම, නැත්තං යමක් code කිරීම.\n\n2. ක්‍රීඩා කිරීම / ව්‍යායාමය කිරීම – Gym එකට යන එක, දුවන එක, හෝ නව ක්‍රීඩාවක් උත්සාහ කිරීම.\n\n3. සන්සුන් තැනකට යන එක – නිදහස් අවකාශයකට ගිහින් යමක් වෙනස් කරලා බලන්න.\n\n4. ගෘහස්ථ වැඩ කිරීම – හීන කුටියක් සැලසුම් කිරීම, නව දෙයක් නිර්මාණය කිරීම, ඇඳුම් සැලසුම් කිරීම වගේ දේවල්.\n\nතවද, ආදරණීය මිනිස්සුන් සමඟ කාලය ගත කරන්න – පවුලේ අයට, යහළුවන්ට, සහ ආදරය කරන කෙනෙකුට කාලය යොදන්න.\n\nඔයාට වඩාත් ගැලපෙන, සතුටු කරන දේවල් කරන්න.\n\n/ Yes, I can help you!") || input.includes("Can you help me?")) {
        return "පාලුව මකාගන්න පුලුවන් ක්‍රම ගොඩක් තියෙනවා. ඔයාට කැමති, හිතට ගැලපෙන එකක් හොයලා බලන්න.\n\nමානසික පාලුවට:\n\n1. නව දේවල් ඉගෙන ගන්න – නව භාෂාවක්, විශේෂ දැනුමක් හෝ හැකියාවක් ඉගෙන ගන්න.\n\n2. පාඩම් කරන්න / වැඩි දැනුමක් ලබා ගන්න – ගිහිගෙදර හෝ වෘත්තියට අදාල නව දෙයක් හොයාගෙන ඉගෙන ගන්න.\n\n3. බලන්න, අහන්න, කියවන්න – චිත්‍රපට, නාට්‍ය, පොත්, පොඩි කතා (short stories), podcast අහන්න.\n\n4. සන්සුන් වෙන්න – ජීවිතේ ගැන හිතන්න, journaling කරන්න, ස්වයං ප්‍රතිපල ගැන හෝ අදහස් ලියන්න.\n\n5. නව මිතුරන් හෝ සබඳතා ගොඩනගන්න – Discord, Telegram, Facebook වගේ තැන්වලින් ලෝකයේ වෙනත් මිනිස්සුන් එක්ක සම්බන්ධ වෙන්න.\n\nභෞතික පාලුවට:\n\n1. ගොඩක් කාර්යබහුල වෙන්න – වැඩ කරන එක, project එකක් කරලා බැලීම, නැත්තං යමක් code කිරීම.\n\n2. ක්‍රීඩා කිරීම / ව්‍යායාමය කිරීම – Gym එකට යන එක, දුවන එක, හෝ නව ක්‍රීඩාවක් උත්සාහ කිරීම.\n\n3. සන්සුන් තැනකට යන එක – නිදහස් අවකාශයකට ගිහින් යමක් වෙනස් කරලා බලන්න.\n\n4. ගෘහස්ථ වැඩ කිරීම – හීන කුටියක් සැලසුම් කිරීම, නව දෙයක් නිර්මාණය කිරීම, ඇඳුම් සැලසුම් කිරීම වගේ දේවල්.\n\nතවද, ආදරණීය මිනිස්සුන් සමඟ කාලය ගත කරන්න – පවුලේ අයට, යහළුවන්ට, සහ ආදරය කරන කෙනෙකුට කාලය යොදන්න.\n\nඔයාට වඩාත් ගැලපෙන, සතුටු කරන දේවල් කරන්න.\n\n/ Yes, I can help you!";
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

