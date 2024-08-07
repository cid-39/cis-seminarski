const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// pokusaj popravke
//setTimeout(10000)

// MySQL Connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'rootpassword',
    database: process.env.DB_NAME || 'db'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    
    /////
    console.log(req.body);
    /////
    
    const { name, email, message } = req.body;

    // Insert data into MySQL database
    const sql = `INSERT INTO Feedback (name, email, message) VALUES (?, ?, ?)`;
    connection.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into database: ', err);
            res.status(500).json({ message: 'Error inserting data into database' });
            return;
        }
        console.log('Data inserted into database');
        res.status(200).json({ message: 'Form submitted successfully' });
    });
});

// Endpoint to fetch data from MySQL database
app.get('/data', (req, res) => {
    // Select data from MySQL database
    const sql = 'SELECT * FROM Feedback'; // Replace with your table name
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data from database: ', err);
            res.status(500).json({ error: 'Error fetching data from database' });
            return;
        }
        res.json(results); // Send data as JSON response
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
