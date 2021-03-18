const mongoose = require("mongoose");
const { isEmail } = require("validator")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'Email address is required',
        validate: [isEmail, 'Invalid email']
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const UserModal = mongoose.model('User', UserSchema);

module.exports = UserModal;