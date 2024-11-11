document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define valid credentials (In a real application, you'd fetch this from a database)
    const validUsername = 'user';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Redirect to index.html on successful login
        window.location.href = 'index.html';
    } else {
        // Show error message
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});