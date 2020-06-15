const  mysql = require('mysql');
const  connection =    mysql.createConnection({
host: '3000', // address of the server
     user: 'me', // username
     password: 'testmdp',
     database: 'my_db',
});

module.exports = connection;