// Get the NO button element
const noButton = document.querySelector('.no-btn');

// Function to make the button jump to a random position
function makeButtonJump() {
    // Get the container dimensions
    const container = document.querySelector('.button-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculate random positions within the container
    const randomX = Math.floor(Math.random() * (containerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - noButton.offsetHeight));

    // Apply the random position using the CSS transform property
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add event listener to the NO button
noButton.addEventListener('click', makeButtonJump);
