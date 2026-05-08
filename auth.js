document.addEventListener('DOMContentLoaded', () => {
    console.log("Login/Signup page script loaded");

    // --- DOM Elements ---
    const loginToggleBtn = document.getElementById('login-toggle-btn');
    const signupToggleBtn = document.getElementById('signup-toggle-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Login Form Elements & Validation
    const loginEmailInput = document.getElementById('login-email');
    const loginPasswordInput = document.getElementById('login-password');
    const loginEmailError = document.getElementById('login-email-error');
    const loginPasswordError = document.getElementById('login-password-error');
    const forgotPasswordLink = document.querySelector('.forgot-password');

    // Signup Form Elements & Validation
    const signupNameInput = document.getElementById('signup-name');
    const signupEmailInput = document.getElementById('signup-email');
    const signupPasswordInput = document.getElementById('signup-password');
    const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
    const signupNameError = document.getElementById('signup-name-error');
    const signupEmailError = document.getElementById('signup-email-error');
    const signupPasswordError = document.getElementById('signup-password-error');
    const signupConfirmPasswordError = document.getElementById('signup-confirm-password-error');

    // Social Login Buttons
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');

    // --- Form Toggling ---
    loginToggleBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginToggleBtn.classList.add('active');
        signupToggleBtn.classList.remove('active');
    });

    signupToggleBtn.addEventListener('click', () => {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupToggleBtn.classList.add('active');
        loginToggleBtn.classList.remove('active');
    });

    // --- Form Validation Functions ---

    // Helper to display error messages
    const displayError = (element, message) => {
        element.textContent = message;
    };

    // Helper to clear error messages
    const clearError = (element) => {
        element.textContent = '';
    };

    // Validate Email Format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate Password Strength (Basic)
    const isStrongPassword = (password) => {
        // Example: at least 8 characters, includes uppercase, lowercase, number
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password);
    };

    // --- Login Form Validation ---
    const validateLoginForm = () => {
        let isValid = true;

        // Email Validation
        if (loginEmailInput.value.trim() === '') {
            displayError(loginEmailError, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(loginEmailInput.value.trim())) {
            displayError(loginEmailError, 'Please enter a valid email address.');
            isValid = false;
        } else {
            clearError(loginEmailError);
        }

        // Password Validation
        if (loginPasswordInput.value.trim() === '') {
            displayError(loginPasswordError, 'Password is required.');
            isValid = false;
        } else {
            clearError(loginPasswordError);
        }

        return isValid;
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        if (validateLoginForm()) {
            console.log("Login form is valid. Submitting...");
            // In a real app: Perform login API call
            alert("Login successful! (Dummy action)");
            // Example redirect: window.location.href = 'index.html';
        } else {
            console.log("Login form validation failed.");
        }
    });

    // --- Signup Form Validation ---
    const validateSignupForm = () => {
        let isValid = true;
        const name = signupNameInput.value.trim();
        const email = signupEmailInput.value.trim();
        const password = signupPasswordInput.value;
        const confirmPassword = signupConfirmPasswordInput.value;

        // Name Validation
        if (name === '') {
            displayError(signupNameError, 'Name is required.');
            isValid = false;
        } else {
            clearError(signupNameError);
        }

        // Email Validation
        if (email === '') {
            displayError(signupEmailError, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayError(signupEmailError, 'Please enter a valid email address.');
            isValid = false;
        } else {
            clearError(signupEmailError);
        }

        // Password Validation
        if (password === '') {
            displayError(signupPasswordError, 'Password is required.');
            isValid = false;
        } else if (!isStrongPassword(password)) {
            displayError(signupPasswordError, 'Password must be at least 8 characters long and include uppercase, lowercase, and a number.');
            isValid = false;
        } else {
            clearError(signupPasswordError);
        }

        // Confirm Password Validation
        if (confirmPassword === '') {
            displayError(signupConfirmPasswordError, 'Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            displayError(signupConfirmPasswordError, 'Passwords do not match.');
            isValid = false;
        } else {
            clearError(signupConfirmPasswordError);
        }

        return isValid;
    };

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        if (validateSignupForm()) {
            console.log("Signup form is valid. Submitting...");
            // In a real app: Perform signup API call
            alert("Signup successful! (Dummy action)");
            // Example redirect: window.location.href = 'index.html';
        } else {
            console.log("Signup form validation failed.");
        }
    });

    // --- Forgot Password Link ---
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Forgot Password link clicked.");
        // In a real app: Show a modal or navigate to password reset page
        alert("Password reset functionality is not implemented in this demo.");
    });

    // --- Social Login Button Handlers (UI only) ---
    googleBtn.addEventListener('click', () => {
        console.log("Google Login button clicked.");
        alert("Google login simulation. Please implement actual authentication.");
    });

    facebookBtn.addEventListener('click', () => {
        console.log("Facebook Login button clicked.");
        alert("Facebook login simulation. Please implement actual authentication.");
    });

    // --- Input Event Listeners for Real-time Validation (Optional but good UX) ---
    loginEmailInput.addEventListener('input', () => { if (loginEmailInput.value.trim() !== '') clearError(loginEmailError); });
    loginPasswordInput.addEventListener('input', () => { if (loginPasswordInput.value.trim() !== '') clearError(loginPasswordError); });

    signupNameInput.addEventListener('input', () => { if (signupNameInput.value.trim() !== '') clearError(signupNameError); });
    signupEmailInput.addEventListener('input', () => { if (signupEmailInput.value.trim() !== '') clearError(signupEmailError); });
    signupPasswordInput.addEventListener('input', () => {
        if (signupPasswordInput.value !== '') {
            clearError(signupPasswordError); // Clear password error first
            // If confirm password field has value, re-validate match
            if(signupConfirmPasswordInput.value !== '' && signupPasswordInput.value !== signupConfirmPasswordInput.value) {
                displayError(signupConfirmPasswordError, 'Passwords do not match.');
            } else {
                 clearError(signupConfirmPasswordError);
            }
        }
    });
    signupConfirmPasswordInput.addEventListener('input', () => {
        if (signupConfirmPasswordInput.value !== '' && signupPasswordInput.value !== signupConfirmPasswordInput.value) {
            displayError(signupConfirmPasswordError, 'Passwords do not match.');
        } else {
            clearError(signupConfirmPasswordError);
        }
    });

});


