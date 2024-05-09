// typing-animation.js
const phrases = ["Hello World!", "Welcome to my profile!", "I'm a passionate developer."];
let index = 0;
const typingSpan = document.getElementById("typing-span");

function typeNextPhrase() {
  typingSpan.textContent = "";
  const phrase = phrases[index];
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    if (charIndex === phrase.length) {
      clearInterval(typingInterval);
      setTimeout(deletePhrase, 1000);
      return;
    }
    typingSpan.textContent += phrase.charAt(charIndex);
    charIndex++;
  }, 100);
}

function deletePhrase() {
  let charIndex = typingSpan.textContent.length - 1;
  const deletingInterval = setInterval(() => {
    if (charIndex === -1) {
      clearInterval(deletingInterval);
      index = (index + 1) % phrases.length;
      setTimeout(typeNextPhrase, 500);
      return;
    }
    typingSpan.textContent = typingSpan.textContent.slice(0, charIndex);
    charIndex--;
  }, 50);
}

typeNextPhrase();
