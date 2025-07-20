// ✅ Buy Alert Logic
const buyMessages = [
  "🐐 WhaleAlert: Someone just bought 2M $GOATKING!",
  "🔥 FomoBuyer: Another 500K $GOATKING grabbed.",
  "📈 MarketWatch: Buy wall forming now!",
  "🚨 GoatSniper: Wallet 0xA7... just entered with 1 SOL!",
  "🧠 DegenBot: More buys incoming. Trend reversal possible.",
  "🐋 WhaleWatch: Big buyer alert. FOMO pump imminent!"
];

function showBuyAlert() {
  const message = buyMessages[Math.floor(Math.random() * buyMessages.length)];
  const popup = document.getElementById("buyAlertPopup");
  const text = document.getElementById("buyAlertText");
  text.innerText = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 5500);
}

function isPopupVisible() {
  const buyPopup = document.getElementById("buyAlertPopup");
  const devPopup = document.getElementById("devWalletPopup");
  return (
    (buyPopup && buyPopup.style.display === "block") ||
    (devPopup && devPopup.style.display === "block")
  );
}

setInterval(() => {
  if (!isPopupVisible() && Math.random() < 0.3) {
    showBuyAlert();
  }
}, Math.floor(Math.random() * 10000) + 15000);

// ✅ FOMO Popup Logic
const fomoMessages = [
  "🐋 Whale just bought 5M $GOATKING!",
  "🚀 10 wallets sniped $GOATKING in last 5 mins!",
  "🔥 FOMO is real! Buy before 100x!",
  "👑 Dev wallet only 20M left!",
  "📈 Volume spike spotted! Dexscreener green!",
  "🫨 Missed GROK? Don’t miss GOATKING!",
  "✅ LP locked. SAFU confirmed."
];

function showFomoPopup() {
  const popup = document.getElementById("fomo-popup");
  const message = document.getElementById("fomo-message");
  const index = Math.floor(Math.random() * fomoMessages.length);
  message.textContent = fomoMessages[index];

  popup.style.display = "block";
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  }, 6000);
}

setInterval(showFomoPopup, 12000);

// ✅ Dev Wallet Countdown
const unlockTime = new Date("2025-07-22T12:00:00Z").getTime();
const timer = document.getElementById("countdownTimer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = unlockTime - now;

  if (distance <= 0) {
    timer.innerHTML = "Unlocked!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// ✅ Anti-Bot Fake Stats
const botMessages = [
  "🛡️ 4 sniper bots blocked",
  "⚠️ Suspicious wallet flagged",
  "🔍 Monitoring MEV activity",
  "🚫 2 MEV bots rejected",
  "🤖 AI Guard active: No threats found",
  "🛑 Whale bot detected, defense up",
  "👁 5 stealth wallets scanned",
  "💡 Anti-bot scanner optimized"
];

function showBotStats() {
  const popup = document.getElementById("botStatsPopup");
  const message = botMessages[Math.floor(Math.random() * botMessages.length)];
  popup.innerText = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 6000);
}

setInterval(() => {
  if (!isPopupVisible()) showBotStats();
}, Math.floor(Math.random() * 10000) + 15000);

// ✅ Fake Chat Rotation
const chatMessages = [
  { user: "🐐 GoatFan69", text: "Just bought 1M $GOATKING 🔥" },
  { user: "💰 SnipeWhale", text: "Bro this might moon today" },
  { user: "👑 DevKing", text: "913 SOL target approaching fast." },
  { user: "🦍 BigApe", text: "Holding. Not selling until 100x." },
  { user: "🌪️ MemeLord", text: "GOATKING could be the next GROK." },
  { user: "📈 ChartWizard", text: "Dexscreener showing huge spike." },
  { user: "👻 AnonAlpha", text: "Only 20M tokens left on dev wallet." },
  { user: "💼 EntrySniper", text: "Got in before the next pump" },
  { user: "🚀 FastDegen", text: "Raydium liquidity locked = bullish" },
  { user: "🧠 WhaleIntel", text: "Just saw 7 new wallets rotate buys." }
];

const chatBox = document.getElementById("chatBox");

function shuffleMessages() {
  if (!chatBox) return;
  const randomIndex = Math.floor(Math.random() * chatMessages.length);
  const message = chatMessages[randomIndex];
  const div = document.createElement("div");
  div.className = "chat-message";
  div.innerHTML = `<span class="user">${message.user}:</span> ${message.text}`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  if (chatBox.children.length > 8) {
    chatBox.removeChild(chatBox.children[0]);
  }
}

for (let i = 0; i < 4; i++) shuffleMessages();
setInterval(shuffleMessages, 3500);
