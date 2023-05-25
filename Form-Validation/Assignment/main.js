//// Form Validation with JavaScript and Constraint Validation API

const form = document.querySelector('form');
const btn = document.getElementById('btn');

// Email validation

const email = document.getElementById('mail');

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
    email.setCustomValidity('Hey. Don\'t leave me empty!');
    email.reportValidity();
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Enter a valid email address...');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
    email.reportValidity();
  }
}


// Password validation

const password = document.getElementById('pwd');

/*   const pwdConstraint = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@S!*?%])[A-Za-z\d@$!%*?&]{8,20}$"; */

password.addEventListener('input', (event) => {
  if (password.validity.valid) {
    password.setCustomValidity('');
  } else {
    showPwdError();
  }
});

btn.addEventListener('click', (event) => {
  if (!password.validity.valid) {
    event.preventDefault();
    showPwdError();
  }
});

function showPwdError() {
  if (password.validity.valueMissing) {
    password.setCustomValidity('Hey. Don\'t leave me empty!');
    password.reportValidity();
  } else if (password.validity.tooShort) {
    password.setCustomValidity('Password must be 8 characters long...');
    password.reportValidity();
  } else if (password.validity.tooLong) {
    password.setCustomValidity('Password must be less than 20 characters.');
    password.reportValidity();
  } else if (password.validity.patternMismatch) {
    password.setCustomValidity('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.');
    password.reportValidity();
  } else {
    password.setCustomValidity('');
  }
}

// Confirm Password

const confirm = document.getElementById('pwd-con');

confirm.addEventListener('input', (event) => {
  let passwordValue = document.getElementById('pwd').value;
  let confirmValue = document.getElementById('pwd-con').value;
  console.log(passwordValue);
  console.log(confirmValue);

  if (passwordValue === confirmValue) {
    confirm.setCustomValidity('');
  } else {
    confirm.validity = false;
    showConfirmError();
  }
});

btn.addEventListener('click', (event) => {
  if (!password.validity.valid) {
    event.preventDefault();
    showConfirmError();
  }
});

function showConfirmError() {
  let passwordValue = document.getElementById('pwd').value;
  let confirmValue = document.getElementById('pwd-con').value;
  if (confirm.validity.valueMissing) {
    confirm.setCustomValidity('Hey. Don\'t leave me empty!');
    confirm.reportValidity();
  } if (passwordValue !== confirmValue) {
    confirm.setCustomValidity('It\'s not a match!');
    confirm.reportValidity();
  } else if (passwordValue === confirmValue) {
    confirm.setCustomValidity('');
  }
}
