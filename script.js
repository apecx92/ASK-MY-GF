// Timer functionality
let timerDuration = 300; // 5 minutes in seconds
const timerDisplay = document.getElementById("timer");

function updateTimer() {
    // Calculate minutes and seconds from the total seconds
    const minutes = Math.floor(timerDuration / 60);
    const seconds = timerDuration % 60;

    // Display the time in MM:SS format
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Decrease the timer duration by 1 second
    if (timerDuration > 0) {
        timerDuration--;
    } else {
        // When the timer reaches 0, stop the countdown and show a message
        timerDisplay.textContent = "Time's up!";
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Button functionality to make the NO button jump to a random location
const noButton = document.querySelector('.no-btn');

function makeButtonJump() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

    noButton.style.position = 'fixed'; // Keep button fixed within the viewport
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

noButton.addEventListener('click', makeButtonJump);
