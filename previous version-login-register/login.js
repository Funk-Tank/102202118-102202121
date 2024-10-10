function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5500/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else if (response.status === 404) {
            throw new Error('Login route not found');
        } else if (response.status === 500) {
            throw new Error('Server error');
        } else {
            return response.text().then(msg => { throw new Error(msg); });
        }
    })
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed: ' + error.message);
    });
}