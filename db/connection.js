const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nn35746228495',
    database: 'management'
})

module.exports = db;