const mysql = require('mysql')
const dbConfig = require('../config/db.config')

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port: dbConfig.PORT
})

connection.connect(error => {
    if (error) throw error
    console.log('[db] MySQL connected')
})

module.exports = connection