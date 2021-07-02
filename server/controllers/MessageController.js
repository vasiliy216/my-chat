const { MessageModal, DialogModal } = require("../schemas/")

class MessageController {

    constructor(io) {
        this.io = io;
    }

    updateReadStatus (res, userId, dialogId) {
        MessageModal.updateMany(
            { dialog: dialogId, partner: { $ne: userId } },
            { $set: { readed: true } },
            (err) => {
                if (err) {
                    res.status(500).json({
                        status: "error",
                        message: err,
                    });
                } else {
                    this.io.emit("SERVER:MESSAGES_READED", {
                        userId,
                        dialogId,
                    });
                }
            }
        );
    };

    index(req, res) {
        const dialog_id = req.query.dialog;
        const userId = req.user._id;

        this.updateReadStatus(res, userId, dialog_id);

        MessageModal
            .find({ dialog: dialog_id })
            .populate(['dialog', 'partner'])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: 'Messages not found'
                    })
                }
                return res.json(messages);
            });

    }

    create(req, res) {
        const Message = new MessageModal({
            text: req.body.text,
            dialog: req.body.dialog_id,
            partner: req.user._id
        })

        this.updateReadStatus(res, req.user._id, req.body.dialog_id);

        Message
            .save()
            .then(data => {
                data.populate(['dialog', 'partner'], (err, message) => {

                    if (err) {
                        return res.status(500).json({
                            status: "error",
                            message: err
                        })
                    }

                    DialogModal.findOneAndUpdate(
                        { _id: req.body.dialog_id },
                        { lastMessage: message._id },
                        { upsert: true },
                        function (err) {
                            if (err) {
                                return res.status(500).json({
                                    status: "error",
                                    message: err,
                                });
                            }
                        }
                    );

                    res.json(message);

                    this.io.emit("SERVER:NEW_MESSAGE", message);
                })
            }).catch(error => {
                res.json(error)
            })
    }

    delete(req, res) {
        const id = req.params.id;
        MessageModal.findOneAndDelete({ _id: id })
            .then(data => {
                if (data) {
                    return res.json({
                        message: 'Message deleted'
                    })
                }
            })
            .catch(() => {
                res.json({
                    message: 'Message not found'
                })
            })
    }

}

module.exports = MessageController;