function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
fetch('http://localhost:5500/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'user', password: 'pass' }),
})
.then(response => response.json())
.then(data => console.log(data))
    fetch('http://localhost:5500/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            // 如果响应不成功，读取错误信息并抛出错误
            return response.text().then(text => { throw new Error(text || 'Network response was not ok.'); });
        }
        // 如果响应成功，读取文本信息
        return response.text();
    })
    .then(data => {
        alert(data); // 显示来自服务器的响应信息
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed: ' + error.message); // 显示错误信息
    });
}