// JavaScript for making the NO button jump randomly
const noButton = document.getElementById('noButton');

// Function to move the button to a random position
function moveButtonRandomly() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Generate random position within the window
    const randomX = Math.random() * (windowWidth - buttonWidth);
    const randomY = Math.random() * (windowHeight - buttonHeight);

    // Set the new position of the NO button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Event listener to make the NO button jump when clicked
noButton.addEventListener('click', moveButtonRandomly);
