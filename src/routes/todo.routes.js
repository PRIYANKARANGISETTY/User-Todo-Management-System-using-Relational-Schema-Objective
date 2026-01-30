const router = require('express').Router();
const controller = require('../controllers/todo.controller');
const validation = require('../validations/todo.validation');
router.post('/add-todo', validation.createTodoValidation, controller.createTodo);
router.get('/get-my-todo/:userId', controller.getUserTodos);
router.put('/update-todo/:todoId', validation.todoIdValidation, controller.updateTodo);
router.delete('/delete-todo/:todoId', validation.todoIdValidation, controller.deleteTodo);
module.exports = router;
