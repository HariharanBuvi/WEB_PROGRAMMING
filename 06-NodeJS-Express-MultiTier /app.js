// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages.html'));
});

app.post('/login', (req, res) => {
    const { username, email, password } = req.body;

    // Hardcoded for demonstration (real-world: connect to database)
    if (username === 'admin' && email === 'admin@example.com' && password === 'admin123') {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Dashboard</title>
                <style>
                    body { text-align: center; background: #e0ffe0; font-family: Arial; }
                    h1 { color: green; }
                    a { text-decoration: none; color: blue; }
                </style>
            </head>
            <body>
                <h1>Login Successful!</h1>
                <h2>Welcome, ${username}</h2>
                <p>Email ID: ${email}</p>
                <p>Time: ${new Date().toLocaleString()}</p>
                <a href="/">Logout</a>
            </body>
            </html>
        `);
    } else {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Login Failed</title>
                <style>
                    body { text-align: center; background: #ffe0e0; font-family: Arial; }
                    h1 { color: red; }
                    a { text-decoration: none; color: red; }
                </style>
            </head>
            <body>
                <h1>Login Failed!</h1>
                <p>Invalid credentials. Please try again.</p>
                <a href="/">Back to Login</a>
            </body>
            </html>
        `);
    }
});

app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});
