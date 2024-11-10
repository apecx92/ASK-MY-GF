// JavaScript to handle button clicks and page transitions
document.getElementById("startButton").addEventListener("click", function() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("proposal").style.display = "block";
});

document.getElementById("yesButton").addEventListener("click", function() {
  alert("YAY! I'm so happy you said yes!");
  // You can redirect to a special page or just keep the message.
});

document.getElementById("noButton").addEventListener("click", function() {
  alert("That's okay! Take your time.");
});
