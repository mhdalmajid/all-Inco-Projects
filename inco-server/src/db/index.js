import mysql from 'mysql'
import dbConnectOptions from '../config/index.js'

const dbInit = () => {
  const db = mysql.createConnection(dbConnectOptions())

  db.connect((err) => {
    if (err) throw err
    console.log(`DB connected`)
  })

  return db
}

export default dbInit
