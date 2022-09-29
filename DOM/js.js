////// DOM Manipulation

// Create a JS variable that is linked to div id = container
const container = document.querySelector('#container');

// Create a new div
const content = document.createElement('div');

// Add class to newly created div
content.classList.add('content');

// Add content to newly created div
content.textContent = 'Hello, ek is \'n bietjie DOM, steeds leer ek biejtie vir bietjie';

// Append newly created div
container.appendChild(content);