////// Loops

//// Random canvas painter

// Create variables for button, canvas and 2d effect of canvas

const btn = document.querySelector('button');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Makes the canvas the size of the client's screen

document.addEventListener('DOMContentLoaded', () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

// Create randomiser function

function random(number) {
    return Math.floor(Math.random() * number);
}

// Create draw function

function draw() {
    
    // Specifies the pixels that will be used (all the pixels)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // loop
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(150, 150, 0, 0.5)';
        ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

btn.addEventListener('click', draw);

