const content = document.querySelector('body');

const formElement = document.createElement('form');
formElement.setAttribute('id', 'form');
formElement.setAttribute('novalidate', 'true');
content.appendChild(formElement);
// attach it to a class list
formElement.classList.add('form1');

const emailInputContainer = document.createElement('div');
emailInputContainer.classList.add('input-container');
const emailInputElement = document.createElement('input');
emailInputElement.setAttribute('type', 'text');
emailInputElement.setAttribute('email', 'email');
emailInputElement.setAttribute('id', 'email');
emailInputElement.setAttribute('placeholder', 'Enter your email');
emailInputElement.classList.add('input-field');
emailInputContainer.appendChild(emailInputElement);
formElement.appendChild(emailInputContainer);
emailInputElement.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.tagName === 'INPUT') {
        const isValid = validateField('email');
        if (!isValid) {
            target.style.border = '1px solid red';
            const errorText = document.createElement('p');
            errorText.textContent = 'Invalid email';
            errorText.style.color = 'red';
            errorText.classList.add('error-text');
            emailInputContainer.appendChild(errorText);
        } else {
            target.classList.remove('invalid');
            const errorText = target.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    }
});

const countryInputContainer = document.createElement('div');
countryInputContainer.classList.add('input-container');
const countryInputElement = document.createElement('input');
countryInputElement.setAttribute('type', 'text');
countryInputElement.setAttribute('id', 'country');
countryInputElement.setAttribute('placeholder', 'Enter your country');
countryInputElement.classList.add('input-field');
countryInputContainer.appendChild(countryInputElement);
formElement.appendChild(countryInputContainer);
countryInputElement.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.tagName === 'INPUT') {
        const isValid = validateField('country');
        if (!isValid) {
            target.style.border = '1px solid red';
            const errorText = document.createElement('p');
            errorText.textContent = 'Invalid country';
            errorText.style.color = 'red';
            errorText.classList.add('error-text');
            countryInputContainer.appendChild(errorText);
        } else {
            target.classList.remove('invalid');
            const errorText = target.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    }
});

const zipCodeInputContainer = document.createElement('div');
zipCodeInputContainer.classList.add('input-container');
const zipCodeInputElement = document.createElement('input');
zipCodeInputElement.setAttribute('type', 'text');
zipCodeInputElement.setAttribute('id', 'zipCode');
zipCodeInputElement.setAttribute('placeholder', 'Enter your zip code');
zipCodeInputElement.classList.add('input-field');
zipCodeInputContainer.appendChild(zipCodeInputElement);
formElement.appendChild(zipCodeInputContainer);
zipCodeInputElement.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.tagName === 'INPUT') {
        const isValid = validateField('zipCode');
        if (!isValid) {
            target.style.border = '1px solid red';
            const errorText = document.createElement('p');
            errorText.textContent = 'Invalid zip code';
            errorText.style.color = 'red';
            errorText.classList.add('error-text');
            zipCodeInputContainer.appendChild(errorText);
        } else {
            target.classList.remove('invalid');
            const errorText = target.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    }
});

const passwordInputContainer = document.createElement('div');
passwordInputContainer.classList.add('input-container');
const passwordInputElement = document.createElement('input');
passwordInputElement.setAttribute('type', 'password');
passwordInputElement.setAttribute('id', 'password');
passwordInputElement.setAttribute('placeholder', 'Enter your password');
passwordInputElement.classList.add('input-field');
passwordInputContainer.appendChild(passwordInputElement);
formElement.appendChild(passwordInputContainer);
passwordInputElement.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.tagName === 'INPUT') {
        const isValid = validateField('password');
        if (!isValid) {
            target.style.border = '1px solid red';
            const errorText = document.createElement('p');
            errorText.textContent = 'Invalid password';
            errorText.style.color = 'red';
            errorText.classList.add('error-text');
            passwordInputContainer.appendChild(errorText);
        } else {
            target.classList.remove('invalid');
            const errorText = target.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    }
});

const confirmPasswordInputContainer = document.createElement('div');
confirmPasswordInputContainer.classList.add('input-container');
const confirmPasswordInputElement = document.createElement('input');
confirmPasswordInputElement.setAttribute('type', 'password');
confirmPasswordInputElement.setAttribute('id', 'confirmPassword');
confirmPasswordInputElement.setAttribute('placeholder', 'Confirm your password');
confirmPasswordInputElement.classList.add('input-field');
confirmPasswordInputContainer.appendChild(confirmPasswordInputElement);
formElement.appendChild(confirmPasswordInputContainer);
confirmPasswordInputElement.addEventListener('blur', function(event) {
    const target = event.target;
    if (target.tagName === 'INPUT') {
        const isValid = validateField('confirmPassword');
        if (!isValid) {
            target.style.border = '1px solid red';
            const errorText = document.createElement('p');
            errorText.textContent = 'Passwords do not match';
            errorText.style.color = 'red';
            errorText.classList.add('error-text');
            confirmPasswordInputContainer.appendChild(errorText);
        } else {
            target.classList.remove('invalid');
            const errorText = target.parentNode.querySelector('.error-text');
            if (errorText) {
                errorText.remove();
            }
        }
    }
});

formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Custom validation logic
    const isValid = validateForm();
  
    if (isValid) {
      // Submit the form programmatically if valid
      formElement.submit();
    } else {
      // Display custom error messages
      displayErrors();
    }
  });
  
  function validateForm() {
    let isValid = true;
  
    // Validate each field
    isValid &= validateField('country');
    isValid &= validateField('zipCode');
    isValid &= validateField('password');
    isValid &= validateField('confirmPassword');
  
    // Check if passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('password').classList.add('invalid');
      document.getElementById('confirmPassword').classList.add('invalid');
      isValid = false;
    }
  
    return isValid;
  }
  
  function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field.value) {
      field.classList.add('invalid');
      return false;
    } else {
      field.classList.remove('invalid');
      return true;
    }
  }
  
  function displayErrors() {
    // Implement custom error display logic here
    // Example: Display a simple alert
    alert('Please fill out all fields and ensure passwords match.');
  }

