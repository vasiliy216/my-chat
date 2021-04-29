const { MessageModal } = require("../schemas/")

class MessageController {

    constructor(io, data) {
        this.io = io;
        this.data = data;
    }

    index(req, res) { 
        const dialog_id = req.query.dialog;

        console.log(dialog_id)

        MessageModal.
        find({ dialog: dialog_id }).
        populate('dialog').
        exec(function (err, messages) {
            if (err) {
                return res.status(404).json({
                    message: 'Messages not found'
                })
            }
            return res.json(messages);
        });

    }

    create (req, res) {
        const Message = new MessageModal({
            text: req.body.text,
            dialog: req.body.dialog_id,
            partner: req.user._id
        })

        console.log(this.data)

        Message.save()
        .then(data => {
            // res.json(data);
            this.io.emit("MESSAGE", data);
        }).catch(error => {
            res.json(error)
        })
    }

    delete(req, res) { 
        const id = req.params.id;
        MessageModal.findOneAndDelete({_id: id})
        .then(data => {
            if(data) {
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