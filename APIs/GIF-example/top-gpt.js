// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the required elements
  const imgElement = document.querySelector('img');
  const newGifBtn = document.getElementById('new-gif-btn');

  // Add click event listener to the "New GIF" button
  newGifBtn.addEventListener('click', fetchRandomGif);

  // Function to fetch a random GIF
  function fetchRandomGif() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=mGWay0MRfopcreOrjHhrouhIc3lMAXlX&s=dogs', { mode: 'cors' }) // Replace with the actual GIF API endpoint
      .then(response => response.json())
      .then(data => {
        const gifUrl = data.url; // Extract the URL of the random GIF from the response
        imgElement.src = gifUrl; // Set the src attribute of the <img> tag to display the GIF
      })
      .catch(error => {
        console.error('Error fetching random GIF:', error);
      });
  }
});


function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });
}
