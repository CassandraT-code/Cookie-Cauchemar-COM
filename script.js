let cookieCount = 0;
const button = document.getElementById("cookieButton");
const counter = document.getElementById("counter");
const ads = document.getElementById("ads");
const uselessButton = document.getElementById("uselessButton"); // Get the useless button

let buttonRect = button.getBoundingClientRect(); // Get initial button position
let moveCounter = 0;  // Counter to keep track of button moves

// Function to randomly move the button
function moveButton() {
  moveCounter++;  // Increment the move counter

  // Only move if moveCounter is not a multiple of 5 (1 out of 5 times)
  if (moveCounter % 5 !== 0) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = x + "px";
    button.style.top = y + "px";
    buttonRect = button.getBoundingClientRect(); // Update button's position
  }
}

// Function to move button away from the mouse if it's too close
function avoidMouse(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Check if the mouse is too close to the button (within a certain threshold)
  const threshold = 100; // Distance in pixels
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const distanceX = Math.abs(mouseX - buttonCenterX);
  const distanceY = Math.abs(mouseY - buttonCenterY);

  // If the mouse is within the threshold distance, move the button
  if (distanceX < threshold && distanceY < threshold && moveCounter % 5 !== 0) {
    moveButton();  // Move the button away from the mouse
  }
}

// Increment cookie count and update the counter
button.addEventListener("click", () => {
  // Only increment the cookie count if it's the 1 out of 5 time the button is clicked
  if (moveCounter % 5 === 0) {
    cookieCount++;
    counter.textContent = `Cookies: ${cookieCount}`;
  }

  // Apply multiple rotations to the button (e.g., 720 degrees = 2 full rotations)
  button.style.transform = 'translate(-50%, -50%) rotate(720deg)';
  
  // Trigger the moveButton function
  moveButton();

  // Reset rotation after the animation completes
  setTimeout(() => {
    button.style.transition = 'none';  // Disable transition during reset
    button.style.transform = 'translate(-50%, -50%)';  // Reset position and remove rotation
    setTimeout(() => {
      button.style.transition = 'transform 1s ease-in-out';  // Re-enable transition
    }, 50);  // Small delay before re-enabling transition
  }, 1000);  // Duration of the rotation animation (1 second)
});

// Random pop-ups
setInterval(() => {
  if (Math.random() > 0.7) {
    alert("You won... nothing! Keep clicking!");
  }
}, 5000);

// Ads that move randomly
setInterval(() => {
  const x = Math.random() * (window.innerWidth - ads.offsetWidth);
  ads.style.left = x + "px";
}, 3000);




// Show useless button at random positions and with the same text as the cookieButton
setInterval(() => {
    // Position aléatoire du bouton uselessButton
    const x = Math.random() * (window.innerWidth - uselessButton.offsetWidth); // Random x position
    const y = Math.random() * (window.innerHeight - uselessButton.offsetHeight); // Random y position
  
    uselessButton.style.left = `${x}px`;  // Set random horizontal position
    uselessButton.style.top = `${y}px`;   // Set random vertical position
  
    uselessButton.style.display = 'inline-block';  // Show the button
    uselessButton.textContent = button.textContent;  // Copy the text of the cookieButton
    
    uselessButton.style.opacity = 1;  // Make it fully visible
  
    // Hide the button after a short delay
    setTimeout(() => {
      uselessButton.style.opacity = 0;  // Fade out
      setTimeout(() => {
        uselessButton.style.display = 'none';  // Completely hide after fading
      }, 500);  // Wait for fade-out to finish
    }, 2000);  // Keep the button visible for 2 seconds
  }, 3000); // Check every 3 seconds
  