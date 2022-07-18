const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // SQL USERNAME
    user:'root',
    //PASSWORD
    password: 'Nn35746228495',
    database: 'manage'
},
console.log('Connected to the manage database'));

module.exports = db;