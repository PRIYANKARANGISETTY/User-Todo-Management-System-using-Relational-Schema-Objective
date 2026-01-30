const { validationResult } = require('express-validator');
const todoService = require('../services/todo.service');
const userService = require('../services/user.service');
exports.createTodo = async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json(errors.array());
const user = await userService.getUserById(req.body.userId);
if (!user.data) return res.status(404).json({ message: 'User not found' });
const { data } = await todoService.createTodo({
title: req.body.title,
description: req.body.description,
user_id: req.body.userId
});
res.status(201).json(data);
};
exports.getUserTodos = async (req, res) => {
const { data } = await todoService.getTodosByUser(req.params.userId);
res.json(data);
};
exports.updateTodo = async (req, res) => {
const todo = await todoService.getTodoById(req.params.todoId);
if (!todo.data) return res.status(404).json({ message: 'Todo not found' });
const { data } = await todoService.updateTodo(req.params.todoId, req.body);
res.json(data);
};
exports.deleteTodo = async (req, res) => {
await todoService.deleteTodo(req.params.todoId);
res.json({ message: 'Todo deleted successfully' });
};
