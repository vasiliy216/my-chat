const express = require("express")
const UserModal = require("../schemas/User")

class UserController {

    constructor() {
        this.req = express.request;
        this.res = express.response;
    }

    index() {
        const id = req.params.id;
        console.log('index')
        UserModal.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'Not found'
                })
            }
            res.json(user);
        })
    }

    create() {
        const Users = new UserModal({
            email: 'asd@asd.r',
            fullName: 'asd@asd.r',
            password: 'asd@asd.r',
        })
    
        Users.save()
        .then(data => {
            this.res.json(data)
        }).catch(error => {
            this.res.json(error)
        })
    }

    asd() {
        return console.log('ghgk');
    }

    qwe(g) {
        const zxc = 'asd';
        console.log(zxc);
    }

}

module.exports = UserController;