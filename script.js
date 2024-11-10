// script.js

// Set the date and time for the countdown
const countdownDate = new Date("Nov 15, 2024 18:00:00").getTime();

// Update the countdown every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "It's time to ask!";
    }
}, 1000);

// Function to display the response message
function showAnswer() {
    document.getElementById("response").classList.remove("hidden");
}
