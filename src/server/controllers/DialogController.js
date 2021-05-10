const { DialogModal, MessageModal } = require("../schemas/")

class DialogController {

    constructor(io) {
        this.io = io;
    }

    index(req, res) {
        const user_id = req.user._id;

        DialogModal
            .find()
            .or([{ author: user_id }, { partner: user_id }])
            .populate(['author', 'partner'])
            .populate({ path: 'lastMessage', populate: { path: 'partner' } })
            .exec(function (err, dialogs) {
                if (err) {
                    return res.status(404).json({
                        message: 'Dialogs not found'
                    })
                }
                return res.json(dialogs);
            });

    }

    create(req, res) {

        const postData = {
            author: req.user._id,
            partner: req.body.partner
        }

        DialogModal.findOne(
            {
                author: req.user._id,
                partner: req.body.partner
            },
            (err, dialog) => {
                if (err) {
                    return res.status(500).json({
                        status: 'error',
                        message: err
                    })
                }

                if (dialog) {
                    return res.status(403).json({
                        status: 'error',
                        message: 'This dialog already exists'
                    })
                } else {

                    const Dialog = new DialogModal(postData);

                    Dialog.save()
                        .then(dialogObj => {

                            const Message = new MessageModal({
                                text: req.body.text,
                                partner: req.user._id,
                                dialog: dialogObj._id
                            })

                            Message.save()
                                .then(() => {
                                    dialogObj.lastMessage = Message._id;
                                    dialogObj.save().then(() => {
                                        res.json(dialogObj)
                                        this.io.emit("SERVER:DIALOG_CREATED", {
                                            ...postData,
                                            dialog: dialogObj
                                        });
                                    })
                                }).catch(error => {
                                    res.json(error)
                                })

                        }).catch(error => {
                            res.json(error)
                        })

                }

            }
        )
    }

    delete(req, res) {
        const id = req.params.id;
        DialogModal.findOneAndDelete({ _id: id })
            .then(data => {
                if (data) {
                    this.io.emit("SERVER:DIALOG_DELETED", {
                        ...data
                    });
                    return res.json({
                        message: 'Dialog deleted'
                    })
                }
            })
            .catch(() => {
                res.json({
                    message: 'Dialog not found'
                })
            })
    }

}

module.exports = DialogController;