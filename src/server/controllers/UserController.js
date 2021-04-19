const { UserModal } = require("../schemas/")

class UserController {

    find(req, res) {
        const id = req.params.id;
        console.log("get ", id)
        UserModal.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User not found'
                })
            }
            res.json(user);
        })
    }

    delete(req, res) {
        const id = req.params.id;
        UserModal.findOneAndDelete({_id: id})
        .then(data => {
            if(!data) {
                return res.status(404).json({
                    message: 'User not found'    
                })
            }
            res.json({
                message: `User ${data.fullName} deleted`
            })
        })
        .catch(err => {
            res.status(404).json(err)
        })
    }

    create(req, res) {
        const Users = new UserModal({
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
        })
    
        console.log('User registr ', req.body.email);
    
        Users.save()
        .then(data => {
            res.json(data)
        }).catch(error => {
            res.json(error)
        })
    }

}

module.exports = UserController;