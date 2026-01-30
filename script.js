const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("mainGif");
const mainPage = document.getElementById("mainPage");
const celebrationPage = document.getElementById("celebrationPage");
const easterEggBtn = document.getElementById("easterEggBtn");
const celebrationYesBtn = document.getElementById("celebrationYesBtn");
const secret2 = document.getElementById("secretMessage2");
const bgMusic = document.getElementById("bgMusic");


let musicStarted = false;
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
let windowSizeAlertShown = false;

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

  if (noClickCount === 20) {
    const secret1 = document.getElementById("secretMessage1");
    secret1.classList.remove("hidden");
    secret1.classList.add("visible");
    }
});

yesBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  celebrationPage.style.display = "flex";
  startMusic();
  createConfetti();
});

easterEggBtn.addEventListener("click", () => {
  alert("🎉 Congratulations!\n\nI'll watch any show/movie of your choosing \n(you can even pick Heated Rivalry)");
});

celebrationYesBtn.addEventListener("click", () => {
    if (noClickCount === 0) {
        secret2.classList.remove("hidden");
        secret2.classList.add("visible");
    }
});


// Easter egg 🥚
console.log(
  "%cHey Sabina 👀💖\n\nIf you're reading this...\n\nI owe you a shein cart of your choice 😌",
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

function startMusic() {
  if (!musicStarted && bgMusic) {
    console.log("Starting background music");
    bgMusic.volume = 0.4;
    bgMusic.play().catch((error) => {
      console.log("Music playback failed:", error);
    });
    musicStarted = true;
  }
}


function checkWindowSize() {
  if ((window.innerWidth < 400 || window.innerHeight < 400) && !windowSizeAlertShown) {
    alert("⚠️ Window too small. My love requires more room 💖\n\nI owe you a hotel night out whenever you request it :)");
    windowSizeAlertShown = true;
  }
}

window.addEventListener("resize", checkWindowSize);
checkWindowSize();
