document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Daftar username dan password
    const credentials = {
        'fayyaz': '12345678',
        'arshavin': 'abcdefgh',
        'syahrul': '98765432',
        'kenzie': 'abcd1234'
    };

    if (credentials[username] && credentials[username] === password) {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
