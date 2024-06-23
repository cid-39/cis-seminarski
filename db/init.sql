USE db;

CREATE TABLE IF NOT EXISTS Feedback (
    Name VARCHAR(100),
    Email VARCHAR(100),
    Message TEXT
);

ALTER USER 'student'@'%' IDENTIFIED WITH caching_sha2_password BY 'student';
GRANT ALL PRIVILEGES ON db.* TO 'student'@'%';
FLUSH PRIVILEGES;
EXIT;