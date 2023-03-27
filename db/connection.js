const mysql = require('mysql2');

// Connect to database you have created
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // Enter your MYSQL username
        user: 'root',
        // Enter your MYSQL password
        password: 'sqlkrisp',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;