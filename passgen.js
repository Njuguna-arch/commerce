// Password Generator Function
function generatePassword(length = 12) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+><|[]/|';

    const allChars = lowercase + uppercase + numbers + symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

// Suggest Password when user clicks the button
document.getElementById('suggestPasswordButton').addEventListener('click', () => {
    const suggestedPassword = generatePassword(); // Generate a strong password
    document.getElementById('password').value = suggestedPassword; // Populate the password field
    alert(`Suggested Password: ${suggestedPassword}`); // Display the password to the user
});

// Validate Passwords on Form Submission
document.querySelector('.sign-up-button').addEventListener('click', (event) => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Prevent form submission
    }
});
