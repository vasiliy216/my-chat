const mongoose = require("mongoose");

const DialogSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        partner: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        lastMessage: {
            type: mongoose.Types.ObjectId,
            ref: "Message"
        }
    },
    {
        timestamps: true
    })

const DialogModal = mongoose.model('Dialog', DialogSchema);

module.exports = DialogModal;