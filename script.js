const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("mainGif");
const mainPage = document.getElementById("mainPage");
const celebrationPage = document.getElementById("celebrationPage");
const easterEggBtn = document.getElementById("easterEggBtn");


let yesScale = 1;
let noScale = 1;
let gifChanged = false;

const noMessages = [
  "No",
  "Are you sure?",
  "Wow.",
  "This hurts.",
  "Think again.",
  "Sabina pls 😭"
];

const yesTexts = [
  "Yes",
  "YES 😍",
  "YES 💖",
  "YES!!! 😤",
  "YES!!! 😭",
  "PLEASE"
];

let noClickCount = 0;
let errorShown = false;

noBtn.addEventListener("click", () => {
  yesScale += 0.1;
  noScale -= 0.1;
  if (noScale < 0.5) noScale = 0.5;
  if (yesScale > 1.5) yesScale = 1.5;

  yesBtn.style.transform = `scale(${yesScale}) translateX(-30px)`;
  noBtn.style.transform = `scale(${noScale})`;

  noBtn.textContent =
    noMessages[Math.min(noClickCount + 1, noMessages.length - 1)];

  yesBtn.textContent =
    yesTexts[Math.min(noClickCount + 1, yesTexts.length - 1)];

  if (!gifChanged) {
    gif.src = "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif";
    gifChanged = true;
  }

  if (!errorShown && noClickCount >= 5) {
    alert("⚠️ Error: Saying no is not supported on this website.");
    errorShown = true;
  }

  noClickCount++;
});

easterEggBtn.addEventListener("click", () => {
  alert("🎉 Congratulations!\n\nYou’ve won a fancy date downtown 💃✨");
});


// Easter egg 🥚
console.log(
  "%cHey Sabina 👀💖\n\nIf you're reading this...\n\nI owe you any 1 thing from Aritzia of your choice 😌",
  "color: hotpink; font-size: 16px; font-weight: bold;"
);

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

// Confetti
function createConfetti() {
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff4d88", "#ffd700", "#66ccff", "#ff9933"][
        Math.floor(Math.random() * 4)
      ];
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

yesBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  celebrationPage.style.display = "flex";
  createConfetti();
});
