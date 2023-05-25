const email = document.getElementById('mail');
const errorMsg = document.querySelector('div.error');
const form = document.querySelector('form');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    errorMsg.textContent = '';
    errorMsg.className = 'error';
  } else {
    showErrorMsg();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    event.preventDefault();
    showErrorMsg();
  }
});

function showErrorMsg() {
  if (email.validity.valueMissing) {
    errorMsg.textContent = 'Jy is dom';
    errorMsg.className = 'error active';
  } else if (email.validity.tooShort) {
    errorMsg.textContent = `Jy is dom. Die email moet ${email.minLength} karakters lank wees.`;
    errorMsg.className = 'error active';
  }
}