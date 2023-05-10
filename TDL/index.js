// Create a "close" button and append it to each list item
const myNodeList = document.getElementsByTagName('li');
for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide current list item
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// Add 