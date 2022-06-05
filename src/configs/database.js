const mysql = require('mysql');
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tenunsantara',
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) {
        console.log('Error connecting to Database');
        return;
    }
});

module.exports = koneksi;