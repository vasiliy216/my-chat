const { MessageModal } = require("../schemas/")

class MessageController {

    // Поиск всех сообщений
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

    // Создание первого сообщения
    create(req, res) {
        const Message = new MessageModal({
            text: req.body.text,
            dialog: req.body.dialog_id,
            partner: "6079023faa88631b881d417a"
        })
    
        Message.save()
        .then(data => {
            res.json(data)
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