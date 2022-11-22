const sql = require('mssql')
require('dotenv').config()
// console.log(process.env);
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}


sql.connect(sqlConfig).then(pool=>{
  if(pool.connected){
    console.log('connected.....')
  }
}).catch(e=>console.log(e))
// async () => {
//  try {
//   // make sure that any items are correctly URL encoded in the connection string
//   await sql.connect(sqlConfig)

//   console.dir(`database connected`)
//  } catch (err) {
//   // ... error checks
//  }
// }