const  mysql = require('mysql');
const  connection =    mysql.createConnection({
host: '3000', // address of the server
     user: '', // username
     password: '',
     database: '',
});

module.exports = connection;