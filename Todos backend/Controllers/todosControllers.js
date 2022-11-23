const mssql = require("mssql");
const { v4 } = require("uuid");
const sqlConfig = require("../Config/index");

const getTodos = async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const response = await pool.request().execute("getTodos");
    const todos = await response.recordset;
    console.log(todos);
    if (todos.length === 0) {
      return res.status(404).send("No todos available");
    }
    return res.status(200).json(todos);
    //res.json(results);
  } catch {}
};

const getOneTodo = async (req, res) => {
  try {
    const { todo_id } = req.params;
    const pool = await mssql.connect(sqlConfig);
    const response = await pool
      .request()
      .input("todo_id", todo_id)
      .execute("getOneTodo");
    const todo = await response.recordset;
    console.log(todo);
    res.status(200).json(todo);
  } catch {}
};

//endpoint to insert a todo

const insertTodo = async (req, res) => {
  const todo_id = 'new';
  const { title, description, date } = req.body;
  const pool = await mssql.connect(sqlConfig);
  const response = await pool
    .request()
    .input("todo_id", todo_id)
    .input('title', title)
    .input("description", description)
    .input("date", date)
    .execute('insertTodo');
  const todo = await response.recordset
  res.status(201).json(todo)  
};
module.exports = { getTodos, getOneTodo, insertTodo };
