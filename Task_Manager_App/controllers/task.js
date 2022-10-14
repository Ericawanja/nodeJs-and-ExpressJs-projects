const Task = require('../models/task_models')

const getAllTasks = (req, res) => {
  res.send("From the controllers running");
};

const createTask = async (req,res)=>{
  const task = await Task.create(req.body)
  res.status(201).json(task)
}

const getTask =(req,res)=>{
  res.send("Roure for reading task")
}

const updateTask = (req,res)=>{
  res.send('route for updating tasks')
}

const deleteTask = (req, res)=>{
  res.send('route for deleting tasks')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};
