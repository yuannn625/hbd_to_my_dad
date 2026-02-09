const CORRECT_PASSWORD = "0209";

const messages = [
  "爸爸，祝您生日快樂!!!",
  "希望您永遠開心快樂，",
  "平安健康，"
];

let index = 0;
let animationStarted = false;

const song = document.getElementById("birthdaySong");

// 點信封
function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");

  setTimeout(() => {
    document.getElementById("envelope-screen").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }, 1800);
}

// 檢查密碼
function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === CORRECT_PASSWORD) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    error.textContent = "";

    // ✅ 關鍵：先用「使用者互動」啟動播放權限（靜音）
    song.play().catch(() => {});
    
    if (!animationStarted) {
      animationStarted = true;
      index = 0;
      showNextMessage();
    }
  } else {
    error.textContent = "密碼錯誤，請再試一次";
  }
}

// 文字一段段顯示
function showNextMessage() {
  if (index >= messages.length) return;

  const textEl = document.getElementById("text");
  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = messages[index];
    textEl.style.opacity = 1;

    // 🎶 最後一句：解除靜音，真的播放
    if (index === messages.length - 1) {
      song.muted = false;
    }

    index++;
    setTimeout(showNextMessage, 3000);
  }, 1000);
}
