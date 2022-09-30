//// Method 2 - on_event_

const btn = document.querySelector('#btn');

btn.onclick = () => alert('Hello, World!');

//// Method 3 - Event Listeners

const butt = document.querySelector('#butt');

butt.addEventListener('click', () => {
    alert('Hello, World!');
});

//// Write an alert function

function alertFunction() {
    alert("Ek is honger!");
};

// Call named function

const bTn = document.querySelector('#bTn');

bTn.addEventListener('click', alertFunction);

//// Passing a parameter

bTn.addEventListener('click', function (e) {
    console.log(e);
});

//// Target parameter - gives HTML code that is target

bTn.addEventListener('click', function (e) {
    console.log(e.target);
});

//// Changes color of button

bTn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
