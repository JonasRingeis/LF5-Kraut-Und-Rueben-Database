import mysql from 'mysql2/promise';

// Create a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1:3306',
    user: 'root',
    password: '!-/#vWj,]{HNM9cZEq+/',
    database: 'krautundrueben'
});

export default async function getConnection() {
    return await connection;
}