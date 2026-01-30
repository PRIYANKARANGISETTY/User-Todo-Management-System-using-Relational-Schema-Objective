const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const service = require('../services/user.service');
exports.signup = async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json(errors.array());
const hashed = await bcrypt.hash(req.body.password, 10);
const { data, error } = await service.createUser({
...req.body,
password: hashed
});
if (error) return res.status(400).json({ message: error.message });
res.status(201).json(data);
};
exports.deleteUser = async (req, res) => {
await service.deleteUser(req.params.id);
res.json({ message: 'User and related todos deleted (CASCADE)' });
};
