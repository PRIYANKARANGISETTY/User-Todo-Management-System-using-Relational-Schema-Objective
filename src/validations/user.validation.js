const { body, param } = require('express-validator');


exports.signupValidation = [
body('name').notEmpty(),
body('email').isEmail(),
body('password').isLength({ min: 8 })
];


exports.userIdValidation = [
param('id').isUUID()
];
