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

// 注册按钮事件监听
document.getElementById('register').addEventListener('click', function() {
    // 执行注册逻辑
    const studentId = document.getElementById('student-id').value;
    const school = document.getElementById('school').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const verificationCode = document.getElementById('verification-code').value;

    if (password !== confirmPassword) {
        alert('密码不匹配，请重新输入！');
        return;
    }

    // 这里可以添加实际的注册验证逻辑
    console.log(`Registering with ID: ${studentId}, School: ${school}, Phone: ${phone}`);
    // 假设注册成功，跳转到登录页面
    window.location.href = 'login.html'; // 修改为实际的登录页面路径
});