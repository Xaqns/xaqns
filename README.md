# **Xaqns**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Profile README Typing Animation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      text-align: center;
      padding-top: 100px;
    }

    .typing-animation {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      border-right: .15em solid orange;
      animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
    }

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: orange;
      }
    }
  </style>
</head>
<body>
  <h1>Welcome to My GitHub Profile!</h1>
  <p>Currently typing: <span id="typing-span" class="typing-animation"></span></p>

  <script>
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
  </script>
</body>
</html>


## 📊 GitHub Stats
![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=xaqns&show_icons=true&theme=radical)

## 🔝 Top Languages
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=xaqns&layout=compact&theme=radical)

## 🔥 GitHub Streak
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=xaqns&theme=dark)
