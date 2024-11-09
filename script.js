// Get the NO button element
const noButton = document.querySelector('.no-btn');

// Function to make the button jump to a random position
function makeButtonJump() {
    // Get the dimensions of the viewport (the visible area of the page)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the dimensions of the NO button
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate random positions within the viewport, ensuring the button stays on screen
    const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

    // Apply the random position using the CSS transform property
    noButton.style.position = 'absolute'; // Make the button's position absolute for free movement
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Add event listener to the NO button
noButton.addEventListener('click', makeButtonJump);
