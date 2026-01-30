const router = require('express').Router();
const controller = require('../controllers/user.controller');
const validation = require('../validations/user.validation');
router.post('/signup', validation.signupValidation, controller.signup);
router.delete('/:id', validation.userIdValidation, controller.deleteUser);
module.exports = router;
