//const express = require('express')

import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

interface Todo {
  id: number;
  title: string;
  description: string;
}

const todos: Todo[] = [];

app.get("/todos", (req: Request, res: Response) => {
  res.status(200).json(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const { title, description } = req.body as {
    title: string;
    description: string;
  };
  todos.push({ title, description, id: Math.floor(Math.random() * 1000) });
  return res.status(201).json({ message: "Todo added successfully" });
});

app.get("/todos/:id", (req: Request<{ id: string }>, res: Response) => {
  console.log("getting one");
  if (todos.length === 0) {
    return res.status(404).json({ message: "Todo is not found" });
  }

  const id = +req.params.id;
  const todo = todos.filter((t) => t.id === id);
  if (todo.length === 0) {
    return res.status(404).json({ message: "Todo is not found" });
  }
  return res.status(200).json(todo);
});

app.put("/todos/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = +req.params.id;
  const index = todos.findIndex((x) => x.id === id);

  if (index < 0) {
    return res.status(404).json({ message: "todo not found" });
  }
  const { title, description } = req.body as {
    title: string;
    description: string;
  };
  todos[index] = { ...todos[index], title, description };

 return res.status(200).json({ message: "todo is updated" });
});
app.delete("/todos/:id", (req: Request<{ id: string }>, res: Response) => {
  const id = +req.params.id;
  const index = todos.findIndex((x) => x.id === id);

  if (index < 0) {
    return res.status(404).json({ message: "todo not found" });
  }
  todos.splice(index, 1);
 return  res.status(200).json({ message: "todo is deleted" });
});
app.listen(4000, () => {
  console.log("App is running");
});
