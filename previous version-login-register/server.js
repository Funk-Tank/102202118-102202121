const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5500;

// 数据库连接配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qianqianjie.6', // 替换为你的数据库密码
  database: 'userDB'
});

// 连接数据库
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
    console.log('Connected to the database!');
});

app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 注册API
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    // 检查用户名是否已存在
    connection.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Error checking user:', err);
            res.status(500).send('Server error');
            return;
        }
        if (result.length > 0) {
            // 用户名已存在
            res.status(409).send('Username already exists');
        } else {
            // 插入新用户
            connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        // 处理“重复条目”错误
                        res.status(409).send('Username already exists');
                    } else {
                        console.error('Error registering user:', err);
                        res.status(500).send('Server error');
                    }
                    return;
                }
                res.send('User registered successfully!');
            });
        }
    });
});

// 登录API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Error logging in');
            return;
        }
        if (result.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid username or password!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});