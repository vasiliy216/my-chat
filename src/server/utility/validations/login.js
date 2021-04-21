const { body } = require("express-validator")

module.exports = [body('email').isEmail(), body('password').isLength({ min: 5 })]