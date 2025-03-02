let timeLeft = 30;
const countdown = document.getElementById("countdown");

setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        countdown.textContent = timeLeft;
    } else {
        location.reload();  // 重新載入頁面
    }
}, 1000);