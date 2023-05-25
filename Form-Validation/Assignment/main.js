//// Form Validation with JavaScript and Constraint Validation API

const form = document.querySelector('form');
const btn = document.getElementById('btn');

// Email validation

function checkEmail() {
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
}

// Password validation

function checkPassword() {
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
}

// Confirm Password

function checkConfirm() {
  const confirm = document.getElementById('pwd-con');

  confirm.addEventListener('input', (event) => {
    let passwordValue = document.getElementById('pwd').value;
    let confirmValue = document.getElementById('pwd-con').value;
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
}


// Call all functions

window.onload = () => {
  document.getElementById("mail").onchange = checkEmail();
  document.getElementById("mail").oninput = checkEmail();
  document.getElementById("country").onchange = checkZIP();
  document.getElementById("ZIP").oninput = checkZIP();
  document.getElementById("pwd").onchange = checkPassword();
  document.getElementById("pwd").oninput = checkPassword();
  document.getElementById("pwd-con").onchange = checkConfirm();
  document.getElementById("pwd-con").oninput = checkConfirm();
};




// Zip


function checkZIP() {
  const constraints = {
    sa: [
      "/^\d{4}$/",
      "South Africa ZIPs must have exactly 4 digits: e.g. 1950"
    ],
    na: [
      "^[0-9]{2}+[0]+[0-9]{2}$",
      "Namibia ZIPs must have exactly 5 digits, with the third digit 0: e.g. 19050"
    ],
    mo: [
      "^[0-9]{4}$",
      "Mozambique ZIPs must have exactly 4 digits: e.g. 1950"
    ],
    le: [
      "^[0-9]{3}$",
      "Lesotho ZIPs must have exactly 3 digits: e.g. 195"
    ]
  }

  const zipCode = document.getElementById('ZIP');

  zipCode.addEventListener('input', (event) => {
    const country = document.getElementById('country').value;
    const constraint = new RegExp(constraints[country][0], '');
    console.log(constraint);
    console.log(constraint.test(zipCode.value));
    if (constraint.test(zipCode.value)) {
      zipCode.setCustomValidity('');
    } else {
      zipCode.validity = false;
      showZipError();
    }
  });

  btn.addEventListener('click', (event) => {
    if (!zipCode.validity.valid) {
      event.preventDefault();
      showZipError();
    }
  });

  function showZipError() {
    const country = document.getElementById('country').value;
    const constraint = new RegExp(constraints[country][0], '');
    if (zipCode.value !== constraint) {
      zipCode.setCustomValidity(constraints[country][1]);
      zipCode.reportValidity();
    } else {
      zipCode.setCustomValidity('');
      zipCode.reportValidity();
    }
  }
}