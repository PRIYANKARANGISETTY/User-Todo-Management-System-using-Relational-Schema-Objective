const { body, param } = require('express-validator');


exports.createTodoValidation = [
body('title').notEmpty(),
body('userId').isUUID()
];


exports.todoIdValidation = [
param('todoId').isUUID()
];
