function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.querySelector('.timestamp').textContent = timestamp;
}

// 更新时间戳，每分钟更新一次
setInterval(updateTimestamp, 60000);
updateTimestamp(); // 立即更新时间戳
// JavaScript代码可以根据需要添加，例如更新时间戳、处理按钮点击事件等。

// ... 其他代码 ...

// 发送消息功能
function sendMessage(input, chatContent) {
    const messageContent = input.value.trim();
    if (messageContent) {
        const messageElement = document.createElement('div');
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        // 创建消息内容容器
        const messageText = document.createElement('div');
        messageText.classList.add('message-text');
        messageText.textContent = messageContent;

        // 根据发送的消息类型添加不同的类
        if (input.hasAttribute('data-outgoing')) {
            messageElement.classList.add('message', 'outgoing');
        } else {
            messageElement.classList.add('message', 'incoming');
        }

        messageElement.appendChild(messageText);
        chatContent.appendChild(messageElement);
        input.value = '';
        chatContent.scrollTop = chatContent.scrollHeight;

        // 重置输入框的属性，以便下次可以正确识别消息类型
        input.removeAttribute('data-outgoing');
    }
}

// ... 其他代码 ...

// 获取输入框和发送按钮
const input = document.querySelector('.chat-input input[type="text"]');
const sendButton = document.querySelector('.chat-input button');
const chatContent = document.querySelector('.chat-content');

// 绑定发送事件
sendButton.onclick = function() {
    sendMessage(input, chatContent);
};


// 绑定Enter键事件
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage(input, chatContent);
        e.preventDefault(); // 阻止Enter键默认行为
    }
});

// 绑定点击发送按钮事件
sendButton.addEventListener('click', function() {
    sendMessage(input, chatContent);
});