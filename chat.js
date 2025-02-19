document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");
    const chatMessages = document.getElementById("chatMessages");
  
    // Function to send a message
    const sendMessage = () => {
      const messageText = messageInput.value.trim();
      if (!messageText) return;
  
      appendMessage("You", messageText);
      messageInput.value = "";
  
      // Simulate an AI response after 1 second
      setTimeout(() => {
        appendMessage("AI", generateAIResponse(messageText));
      }, 1000);
    };
  
    // Append a message to the chat container
    const appendMessage = (sender, text) => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("p-4", "rounded-xl", "shadow-sm", "max-w-md", "mx-auto", "mb-2");
  
      if (sender === "You") {
        messageDiv.classList.add("bg-blue-200", "self-end", "text-right");
      } else {
        messageDiv.classList.add("bg-gray-200", "self-start", "text-left");
      }
  
      messageDiv.textContent = `${sender}: ${text}`;
      chatMessages.appendChild(messageDiv);
  
      // Scroll to the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };
  
    // Example function to generate a fake AI response
    const generateAIResponse = (userMessage) => {
      // This can be replaced with real AI logic or API calls.
      return "This is a response from AI!";
    };
  
    // Attach event listeners
    sendButton.addEventListener("click", sendMessage);
  
    // Optionally send message on pressing Enter (without Shift)
    messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  });
  