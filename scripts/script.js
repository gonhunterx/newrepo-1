let clicks = 0;
let button = document.querySelector('button');
let highScore = localStorage.getItem('highScore') || 0;

function add() {
  clicks++;
  button.textContent = clicks;

  if (clicks > highScore) {
    highScore = clicks;
    localStorage.setItem('highScore', highScore);
    updateHighScore(); // Update the high score display
  }
}

// Update high score display
function updateHighScore() {
  const highScoreElement = document.getElementById('highScore');
  highScoreElement.textContent = `High Score: ${highScore}`;
}

// Call the function to update high score when the page loads
updateHighScore();
