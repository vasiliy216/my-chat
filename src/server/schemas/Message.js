const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        partner: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String
        },
        readed: {
            type: Boolean,
            default: false
        },
        dialog: {
            type: mongoose.Types.ObjectId,
            ref: "Dialog",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const MessageModal = mongoose.model('Message', MessageSchema);

module.exports = MessageModal;