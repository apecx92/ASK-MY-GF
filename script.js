// Get the NO button element
const noButton = document.querySelector('.no-btn');

// Function to make the button jump to a random position
function makeButtonJump() {
    // Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get the button dimensions
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate random positions within the window but ensure the button stays inside the viewport
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    // Apply the random position using the CSS transform property
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add event listener for both 'click' (desktop) and 'touchstart' (mobile)
noButton.addEventListener('click', makeButtonJump);
noButton.addEventListener('touchstart', makeButtonJump); // For mobile touch devices
