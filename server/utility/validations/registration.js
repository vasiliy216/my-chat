const { body } = require("express-validator")

module.exports = [
    body('email').isEmail(), 
    body('fullName').isLength({ min: 5 }), 
    body('password').isLength({ min: 5 })
]