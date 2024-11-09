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

    // Ensure the random position is within bounds
    const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

    // Apply the random position using the CSS 'top' and 'left' properties
    noButton.style.position = 'fixed'; // Keep button fixed within the viewport
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Add event listener to the NO button
noButton.addEventListener('click', makeButtonJump);
