const mysql = require('mysql');
const config = require('./config');

const conn = mysql.createConnection(config);

const createUsersTable = `CREATE TABLE IF NOT EXISTS users(
                            id INT AUTO_INCREMENT,
                            firstname VARCHAR(255) NOT NULL,
                            lastname VARCHAR(255) NOT NULL,
                            email VARCHAR(320) NOT NULL,
                            password VARCHAR(256) NOT NULL,
                            PRIMARY KEY(id)
                            )`;

const createSchedulesTable = `CREATE TABLE IF NOT EXISTS schedules(
                                id INT AUTO_INCREMENT,
                                user_id INT,
                                day INT(1),
                                start_at TIME,
                                end_at TIME,
                                PRIMARY KEY(id),
                                FOREIGN KEY(user_id)
                                    REFERENCES users(id)
                                    ON DELETE CASCADE
                                )`;

conn.connect((err) => {
    if(err){
        console.log('Error connecting to DB.');
        return;
    }

    conn.query(createUsersTable, (err, rows) => {
        if(err) throw err;
    })
    conn.query(createSchedulesTable, (err, rows) => {
        if(err) throw err;
    })
});
