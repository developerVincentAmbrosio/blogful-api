require('dotenv').config();

module.exports = {
    "migrationsDirectory": "migrations",
    "driver": "pg",
    DB_URL: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'postgres',
        database : 'blogful'
    }
}