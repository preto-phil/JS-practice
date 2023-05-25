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
    errorMsg.textContent = 'Ek wag vir jou om iets te tik...';
    errorMsg.className = 'error active';
  } else if (email.validity.tooShort) {
    errorMsg.textContent = `Die email moet tenminste ${email.minLength} karakters lank wees.`;
    errorMsg.className = 'error active';
  }
}