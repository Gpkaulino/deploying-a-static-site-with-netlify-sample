const clapButton = document.getElementById('clap-button');
const emojis = ["👐", "👍", "👌", "🤙", "✌️"];
let currentEmojiIndex = 0;
clapButton.addEventListener('click', switchBackground);

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`
  return color;
}

function switchBackground() {
  const backgroundColor = randomColor();
  document.body.style.backgroundColor = backgroundColor;
}

// Function to change the emoji when the button is clicked
document.getElementById("clap-button").addEventListener("click", function() {
    // Increment the index or reset to 0 if it reaches the end of the array
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
    // Set the button's text to the current emoji
    this.textContent = emojis[currentEmojiIndex];
});


