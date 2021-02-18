const dbConnectOptions = () => {
  const { DBHOST, DBNAME, DBUSER, DBPASS, DBPORT } = process.env
  return {
    host: DBHOST,
    user: DBUSER,
    password: DBPASS,
    database: DBNAME,
  }
}
export default dbConnectOptions
