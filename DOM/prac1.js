///// Let's go!


//// create <p>

const para1 = document.createElement('p1');

// Add text - "Hey, I'm red!"

para1.textContent = "Hey, I'm red!";

// Add style - color = red

para1.style.color = 'red';

// Append 

container.appendChild(para1);



//// create h3

const heading3 = document.createElement('h3');

// Add text - "I'm a blue h3"

heading3.textContent = "I'm a blue h3";

// Add style - color = blue

heading3.style.color = 'blue';

// Append

container.appendChild(heading3);



//// Create div

const div1 = document.createElement('divvy');

// Style - black border + pink background

div1.style.cssText = 'border-style: solid; border-width: 5px; border-color: black; background-color: pink';


//// Create child  

// h1 - "I'm in a div"

const heading1 = document.createElement('h1');

heading1.textContent = "I'm in a div";

// Append heading1 to div1

div1.appendChild(heading1);


// p - "ME TOO!"

const para2 = document.createElement('p2');

para2.textContent = "ME TOO!";

// Append para2 to div1

div1.appendChild(para2);



// Append div1 to container

container.appendChild(div1);