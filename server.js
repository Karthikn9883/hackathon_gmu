// This will be you login code
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const { request } = require('https');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

app.use(cors());

// Login route
app.post('/login', (req, res) => {
  // Read user data from user.json file
  console.log(req.body)
  fs.readFile('users.json', 'utf8', (err, data) => {
    console.log('inside read file function')
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
      return;
    }

    // Parse user data from JSON
    const users = JSON.parse(data);

    // Check if user exists and password is correct
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      res.json({ success: true, message: `Welcome, ${user.username}!` });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});