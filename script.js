// script.js

// Sample user data
let users = JSON.parse(localStorage.getItem('users')) || [];

// Login function
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to index.html if login is successful
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
    }
});

// Sign-up function
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Check if the username already exists
    if (users.some(user => user.username === newUsername)) {
        alert("Username is already taken.");
        return;
    }

    // Add new user to the array
    users.push({ username: newUsername, password: newPassword });
    
    // Save updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    alert("Account created successfully! You can now log in.");
    window.location.href = "index.html"; // Redirect to login page
});
