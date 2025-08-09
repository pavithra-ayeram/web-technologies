const form = document.getElementById('registrationForm');

// Field elements
const fields = {
  name: {
    element: document.getElementById('name'),
    errorId: 'nameError',
    validate: (val) => /^[A-Za-z\s]{3,}$/.test(val.trim()),
    message: 'Enter at least 3 letters',
  },
  email: {
    element: document.getElementById('email'),
    errorId: 'emailError',  
    validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
    message: 'Enter a valid email',
  },
  phone: {
    element: document.getElementById('phone'),
    errorId: 'phoneError',
    validate: (val) => /^\d{10}$/.test(val.trim()),
    message: 'Enter a 10-digit number',
  },
  age: {
    element: document.getElementById('age'),
    errorId: 'ageError',
    validate: (val) => Number(val) >= 18 && Number(val)<=70,
    message: 'Age must be between 18 and 70',
  }
};

// Handle real-time validation
Object.values(fields).forEach(({ element, errorId, validate, message }) => {
  element.addEventListener('input', () => {
    const value = element.value;
    if (validate(value)) {
      showSuccess(element, errorId);
    } else {
      showError(element, errorId, message);
    }
  });
});

// Handle validation when submit button is clicked
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  Object.values(fields).forEach(({ element, errorId, validate, message }) => {
    const value = element.value;
    if (!validate(value)) {
      showError(element, errorId, message);
      valid = false;
    } else {
      showSuccess(element, errorId);
    }
  });

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
    clearStyles();
  }
});

function showError(input, errorId, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  document.getElementById(errorId).textContent = message;
}

function showSuccess(input, errorId) {
  input.classList.add('valid');
  input.classList.remove('invalid');
  document.getElementById(errorId).textContent = '';
}

// Clear Styles once form is submitted and accepted
function clearStyles() {
  Object.values(fields).forEach(({ element, errorId }) => {
    element.classList.remove('valid', 'invalid');
    document.getElementById(errorId).textContent = '';
  });
}
