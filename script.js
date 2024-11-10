// Timer functionality
let timerDuration = 300; // 5 minutes in seconds
const timerDisplay = document.getElementById("timer");
const yesButton = document.querySelector('.yes-btn'); // Get the YES button
const noButton = document.querySelector('.no-btn'); // Get the NO button

// Get the Terms and Conditions modal and submit button
const termsModal = document.getElementById("termsModal");
const submitBtn = document.getElementById("submitBtn");

// Function to update the timer
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
        autoClickYesButton(); // Automatically click the YES button
    }
}

// Function to simulate a click on the YES button
function autoClickYesButton() {
    yesButton.click(); // Trigger the YES button's action
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Function to make the NO button jump randomly within the viewport
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

// Listen for click event on NO button and make it jump
noButton.addEventListener('click', makeButtonJump);

// Function to open the Terms and Conditions pop-up when YES is clicked
yesButton.addEventListener('click', () => {
    // Show the Terms and Conditions modal
    termsModal.style.display = "block";
});

// Listen for the Submit button in the modal
submitBtn.addEventListener('click', () => {
    // Hide the Terms and Conditions modal
    termsModal.style.display = "none";

    // Show a confirmation message (you can customize this)
    alert("We will process your request and it will take 3 to 5 business days.");
});
