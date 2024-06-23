const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // Choose the port you want your server to run on

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (assuming 'public' directory contains your frontend files)
app.use(express.static(path.join(__dirname, 'public')));

// Define endpoint for handling API requests or other backend logic
app.post('/api/submit-form', (req, res) => {
    // Example API endpoint to handle form submission
    const { name, email, message } = req.body;

    // Example logic to handle form submission (database interaction, etc.)
    // Replace with your actual logic
    console.log(`Received form submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.json({ message: 'Form submitted successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
