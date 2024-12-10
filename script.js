// Start AR Function
function initiateAR() {
  window.location.href = 'webAR.html';
}
  
// Array of colors to cycle through
const buttonColors = ['#61a6ff', '#ff6f61', '#f4ff61', '#6fffb3'];
let currentColorIndex = 0;

// Function to cycle button colors with a smooth fade effect
function cycleButtonColor() {
  const button = document.querySelector('#ar_button button');

  // Apply fade-out effect
  button.style.transition = 'background-color 0.9s ease, transform 0.9s ease';
  button.style.backgroundColor = buttonColors[currentColorIndex];
  button.style.transform = 'scale(1.5)'; // Slightly enlarge the button for a pulse effect

  // Reset the scale back after the animation
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 500);

  // Increment the index to get the next color
  currentColorIndex = (currentColorIndex + 1) % buttonColors.length;
}

// Start cycling colors every second
setInterval(cycleButtonColor, 3000);
  