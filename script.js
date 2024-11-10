// Countdown Timer Logic
const countdown = document.getElementById("timer");

function updateCountdown() {
    const targetDate = new Date("2024-11-15T00:00:00"); // Set your target date here
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        countdown.textContent = "It's time!";
        document.querySelector('.answer-btn').style.display = 'block';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateCountdown, 1000);

// Show answer button when the countdown ends
document.querySelector('.answer-btn').style.display = 'none';
