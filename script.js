const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match!");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

form.addEventListener("submit", (e) => {
    validatePasswords();

    if (!this.checkValidity()) {
        e.preventDefault();
        alert('Form has invalid credentials!');
    }
});