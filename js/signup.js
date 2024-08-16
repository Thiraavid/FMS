document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  clearErrors();

  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let hasError = false;

  if (firstName === "") {
    showError("firstname", "First Name is required");
    hasError = true;
  }

  if (lastName === "") {
    showError("lastname", "Last Name is required");
    hasError = true;
  }

  if (email === "") {
    showError("email", "Email is required");
    hasError = true;
  } else if (!validateEmail(email)) {
    showError("email", "Please enter a valid email");
    hasError = true;
  }

  if (password === "") {
    showError("password", "Password is required");
    hasError = true;
  } else if (password.length < 6) {
    showError("password", "Password must be at least 6 characters");
    hasError = true;
  }

  if (!hasError) {
    alert("Form submitted successfully!");
    window.location.href = "login.html"; 
  }
});

function showError(inputId, message) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(`${inputId}-error`);
  inputElement.classList.add("input-error");
  errorElement.textContent = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(function (el) {
    el.textContent = "";
  });

  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(function (el) {
    el.classList.remove("input-error");
  });
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

