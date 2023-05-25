//// Form Validation with JavaScript and Constraint Validation API

const form = document.querySelector('form');

// Email validation

const email = document.getElementById('mail');
const btn = document.getElementById('btn');

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    email.setCustomValidity('');
  } else {
    showEmailError();
  }
});

btn.addEventListener('click', (event) => {
  if (!email.validity.valid) {
    event.preventDefault();
    showEmailError();
  }
});


function showEmailError() {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Hey');
    email.reportValidity();
  }
}