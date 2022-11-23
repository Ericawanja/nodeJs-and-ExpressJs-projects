const mssql = require("mssql");
const { v4 } = require("uuid");
const sqlConfig = require("../Config/index");

const getTodos = async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const response = await pool.request().execute("getTodos");
    const todos = await response.recordset;
     console.log(todos);
    return res.status(200).json (todos)
    //res.json(results);
  } catch {}
};

module.exports = { getTodos };
