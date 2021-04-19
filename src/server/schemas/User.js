const mongoose = require("mongoose");
const { isEmail } = require("validator")

const UserSchema = new mongoose.Schema(
    {
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
        confirmed: {
            type: Boolean,
            default: false
        },
        avatar: {
            type: String,
            default: null
        },
        last_seen: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

const UserModal = mongoose.model('User', UserSchema);

module.exports = UserModal;