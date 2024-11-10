// Countdown timer functionality
let countdown = document.getElementById('timer');
let timeLeft = 5 * 60; // 5 minutes in seconds

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
    }
}

// Start the countdown
let timerInterval = setInterval(updateTimer, 1000);

// Open the Terms and Conditions modal when clicked on a button
const termsModal = document.getElementById("termsModal");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    termsModal.style.display = "none";
});

// Optional: Trigger modal on button click
const yesBtn = document.querySelector(".yes-btn");
yesBtn.addEventListener("click", () => {
    termsModal.style.display = "flex"; // Show the modal when YES is clicked
});
