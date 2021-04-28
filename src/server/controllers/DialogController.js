const { DialogModal, MessageModal } = require("../schemas/")

class DialogController {

    // Поиск всех диалогов авторизованного пользователя
    index(req, res) {
        const author_id = req.user._id;

        DialogModal.
            find({ author: author_id }).
            populate(['author', 'partner']).
            exec(function (err, dialogs) {
                if (err) {
                    return res.status(404).json({
                        message: 'Dialogs not found'
                    })
                }
                return res.json(dialogs);
            });

    }

    // Создание диалога
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
                        .then(data => {
                            res.json(data)
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

    // Удаление диалога
    delete(req, res) {
        const id = req.user._id;
        DialogModal.findOneAndDelete({ _id: id })
            .then(data => {
                if (data) {
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