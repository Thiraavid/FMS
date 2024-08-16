function validateForm() {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    // Email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation (example: at least 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // If all validations pass
    window.location.href = "dashboard.html";
    return false; // Prevent form from actually submitting
}
