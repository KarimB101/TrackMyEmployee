const mysql = require('mysql2');

// Connect to database you have created
const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: process.env.PASSWORD,
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;