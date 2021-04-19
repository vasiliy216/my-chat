const { DialogModal } = require("../schemas/")

class DialogController {

    // Поиск всех диалогов авторизованного пользователя
    index(req, res) { 
        const author_id = req.params.id;

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
        const Dialogs = new DialogModal({
            author: req.body.author,
            partner: req.body.partner
        })
    
        Dialogs.save()
        .then(data => {
            res.json(data)
        }).catch(error => {
            res.json(error)
        })
    }

    // Удаление диалога
    delete(req, res) { 
        const id = req.params.id;
        DialogModal.findOneAndDelete({_id: id})
        .then(data => {
            if(data) {
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

    // create(req, res) {
    //     const Users = new UserModal({
    //         email: req.body.email,
    //         fullName: req.body.fullName,
    //         password: req.body.password,
    //     })
    
    //     console.log('User registr ', req.body.email);
    
    //     Users.save()
    //     .then(data => {
    //         res.json(data)
    //     }).catch(error => {
    //         res.json(error)
    //     })
    // }

}

module.exports = DialogController;