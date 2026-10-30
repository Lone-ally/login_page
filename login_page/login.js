document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (e) {
        let valid = true;
        emailError.textContent = '';
        passwordError.textContent = '';

        // Email validation
        if (!email.value) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            emailError.textContent = 'Enter a valid email.';
            valid = false;
        }

        // Password validation
        if (!password.value) {
            passwordError.textContent = 'Password is required.';
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});
