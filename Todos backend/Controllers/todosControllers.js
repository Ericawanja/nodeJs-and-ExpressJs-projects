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

    if (todo.length > 0) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: `Todo with id ${id} does not exist` });
    }
  } catch {}
};

//endpoint to insert a todo

const insertTodo = async (req, res) => {
  const todo_id = v4();
  const { title, description, date } = req.body;
  const pool = await mssql.connect(sqlConfig);
  const response = await pool
    .request()
    .input("todo_id", todo_id)
    .input("title", title)
    .input("description", description)
    .input("date", date)
    .execute("insertTodo");
  const todo = await response.recordset;
  res.status(201).json({ message: "you have succesfully added a todo" });
};

const updateTodo = async (req, res) => {
  const { todo_id } = req.params;
  const { title, description, date } = req.body;
  try {
    const pool = await mssql.connect(sqlConfig);
    //check if the item exist first'
    const response = await pool
      .request()
      .input("todo_id", todo_id)
      .execute("getOneTodo");
    const todo = await response.recordset;

    const todo_in_db = todo.find((t) => t.todo_id === todo_id);
    if (todo) {
      //logic to update since it exists
    } else {
      res.status(200).json({ message: "the item does not exist in the db" });
    }
    await pool.execute
      .input("todo_id", todo_id)
      .input("title", title)
      .input("description", description)
      .input("date", date)
      .execute("updateTodo");
    res.status(200).json({ message: `You have succesfully updated the item` });
  } catch {}
};

//delete todo

const deleteTodo = async (req,res)=>{
  const {todo_id} = req.params
  const pool = await mssql.connect(sqlConfig)

  //check if the item exists first
  const todo = await (await pool.request().input('todo_id', todo_id).execute('getOneTodo')).recordset

  if(todo.length > 0){
    await pool.request().input('todo_id', todo_id).execute('deleteTodo')
    res.status(200).json({"messege": `Succesful delete`})

  }else{

    res.status(404).json({"messege": `A todo with id ${todo_id} does not exist`})
  }
  
}
module.exports = { getTodos, getOneTodo, insertTodo, updateTodo, deleteTodo };
