const CORRECT_PASSWORD = "0209";

const messages = [
  "爸爸，祝您生日快樂!!!",
  "希望您永遠開心快樂，",
  "平安健康，"
];

let index = 0;

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("envelope-screen").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }, 1000);
}

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === CORRECT_PASSWORD) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    showNextMessage();
  } else {
    error.textContent = "密碼錯誤，請再試一次";
  }
}

function showNextMessage() {
  if (index >= messages.length) return;

  const textEl = document.getElementById("text");
  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = messages[index];
    textEl.style.opacity = 1;
    index++;
    setTimeout(showNextMessage, 3000);
  }, 1000);
}
