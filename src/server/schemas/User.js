const mongoose = require("mongoose");
const { generatorPasswordHash } = require("../utility")
const { isEmail } = require("validator")
const differenceInMinutes = require('date-fns/differenceInMinutes')

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
        },
        confirmed_hash: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

UserSchema.virtual("isOnline").get(function () {
    return differenceInMinutes(new Date(), this.last_seen) < 5;
});

UserSchema.set("toJSON", {
    virtuals: true,
});

UserSchema.pre('save', async function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    user.password = await generatorPasswordHash(user.password);
    user.confirmed_hash = await generatorPasswordHash(new Date().toString());
});

const UserModal = mongoose.model('User', UserSchema);

module.exports = UserModal;