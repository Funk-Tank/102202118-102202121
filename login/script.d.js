// 更新时间戳
function updateTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.timestamp').textContent = `${hours}:${minutes}`;
}

// 定时更新时间戳
setInterval(updateTimestamp, 60000);
updateTimestamp(); // 初始化时间戳

// 登录按钮事件监听
document.getElementById('login').addEventListener('click', function() {
    // 执行登录逻辑
    const loginId = document.getElementById('login-id').value;
    const password = document.getElementById('password').value;
    console.log(`Attempting to login with ID: ${loginId} and password: ${password}`);
    
    // 假设登录成功，跳转到主页
    window.location.href = 'latest-projects.html'; // 修改为实际的主页路径
});