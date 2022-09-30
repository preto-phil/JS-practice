//// Method 2 - on_event_

const btn = document.querySelector('#btn');

btn.onclick = () => alert('Hello, World!');

//// Method 3 - Event Listeners

const butt = document.querySelector('#butt');

butt.addEventListener('click', () => {
    alert('Hello, World!');
});
