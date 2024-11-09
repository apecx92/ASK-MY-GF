// Get the NO button element
const noButton = document.querySelector('.no-btn');

// Function to make the button jump to a random position
function makeButtonJump() {
    // Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate random positions within the window
    const randomX = Math.floor(Math.random() * (windowWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - noButton.offsetHeight));

    // Apply the random position using the CSS transform property
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add event listener to the NO button
noButton.addEventListener('click', makeButtonJump);
