const { UserModal } = require("../schemas/")
const { createJwtToken } = require("../utility")
const { validationResult } = require("express-validator")

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
        UserModal.findOneAndDelete({ _id: id })
            .then(data => {
                if (!data) {
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

    login(req, res) {
        const postData = {
            email: req.body.email,
            password: req.body.password
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        UserModal.findOne({ email: postData.email }, (err, data) => {
            if (err) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            if (data.password === postData.password) {
                const token = createJwtToken(postData);

                res.json({
                    status: "success",
                    token
                })
            } else {
                res.json({
                    status: "error",
                    message: "Incorect password or email"
                })
            }
        })

    }

}

module.exports = UserController;