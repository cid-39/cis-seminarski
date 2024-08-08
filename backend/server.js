const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;


// povezivanje sa mysql bazom
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',    // koristimo root-a womp womp
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

// Obrada json-a iz request-a
app.use(bodyParser.json());

// Endpoint za ubacivanje novog reda u bazu
app.post('/submit-form', (req, res) => {
    
    /////
    console.log(req.body);
    /////
    
    const { name, email, message } = req.body;

    // Ubacivanje u bazu
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

// Endpoint za dobijanje svih redova baze
app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM Feedback';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data from database: ', err);
            res.status(500).json({ error: 'Error fetching data from database' });
            return;
        }
        res.json(results); // vracanje query-ja u json obliku
    });
});

// paljenje servera
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
