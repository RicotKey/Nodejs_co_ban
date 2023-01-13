import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_basic'
});

// connection.query(
//     'SELECT * FROM `user`',
//     function(err, results, fields){
//         console.log('>>>check');
//         console.log(results);
//         console.log(fields);
//     }
// )

export default connection;