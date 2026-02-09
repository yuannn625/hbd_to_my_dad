const CORRECT_PASSWORD = "0209";

const messages = [
  "爸爸:",
  "祝您生日快樂!",
  "上大學用特別一點的賀卡展現一下^^",
  "這陣子你真的辛苦了，我也很難用言語形容這種辛苦...",
  "我很多時候都想幫忙，但又幫不上，希望趕緊有一天，我能幫你承擔更多的事情",
  "我希望你可以不要把自己逼太緊，照顧自己的身心靈也是很重要的",
  "最後再次祝你生日快樂!! 🎂🎂🎂",
  "希望你永遠平安健康，心想事成 😁😁"
];

let index = 0;
let started = false;
const bgm = document.getElementById("bgm");

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

    // ✅ 使用者互動時先啟動音樂（靜音）
    bgm.play().catch(() => {});
    
    if (!started) {
      started = true;
      index = 0;
      showNextLine();
    }
  } else {
    error.textContent = "密碼錯誤，請再試一次";
  }
}

// 每行顯示 5 秒
function showNextLine() {
  if (index >= messages.length) {
    // 顯示照片
    setTimeout(() => {
      document.getElementById("content").classList.add("hidden");
      document.getElementById("photo-screen").classList.remove("hidden");
    }, 5000);
    return;
  }

  const textEl = document.getElementById("text");
  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = messages[index];
    textEl.style.opacity = 1;

    // 第一行文字出現時解除靜音（保證有聲音）
    if (index === 0) {
      bgm.muted = false;
    }

    index++;
    setTimeout(showNextLine, 5000);
  }, 800);
}
