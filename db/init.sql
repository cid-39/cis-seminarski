USE db;

CREATE TABLE IF NOT EXISTS Feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL
);

-- Insert sample data into 'Feedback' table (optional)
INSERT INTO Feedback (name, email, message) VALUES
('Alice Johnson', 'alice@example.com', 'This is a test message from Alice.'),
('Bob Brown', 'bob@example.com', 'This is a test message from Bob.');

-- ALTER USER 'student'@'localhost' IDENTIFIED WITH mysql_native_password BY 'student';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rootpassword';
FLUSH PRIVILEGES;