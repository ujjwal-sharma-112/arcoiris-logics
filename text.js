const typingText = document.getElementById("typing-text");
const text = typingText.innerText;
let index = 0;

function type() {
    // Get current text
    const currentText = text.slice(0, index);
  
    // Add current text to element
    typingText.textContent = currentText;
  
    // Increment index
    index++;
  
    // Check if index exceeds text length
    if (index > text.length) {
      index = 0; // Reset index to restart animation
    }
  }
  

// Call the type function every 200 milliseconds
setInterval(type, 200);