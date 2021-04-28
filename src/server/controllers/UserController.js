const { UserModal } = require("../schemas/")
const { createJwtToken } = require("../utility")
const { validationResult } = require("express-validator")
const { Mailer } = require("../core")
const bcrypt = require("bcrypt")

class UserController {

    find(req, res) {
        const id = req.params.id;
        UserModal.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User not found'
                })
            }
            res.json(user);
        })
    }

    findUser(req, res) {
        const query = req.query.query;

        UserModal
            .find({ fullName: new RegExp(query, 'i') })
            .then(data => res.json(data))
            .catch(err => {
                return res.status(404).json({
                    status: 'error',
                    message: err
                })
            })
    }

    getMe(req, res) {
        const id = req.user._id;

        UserModal.findById(id, (err, user) => {
            if (err || !user) {
                return res.status(404).json({
                    message: 'User not found'
                })
            }
            res.json(user);
        })
    }

    verifi(req, res) {
        const hash = req.query.hash;

        if (!hash) {
            res.status(402).json({
                errors: "Invalid status"
            })
        } else {
            UserModal.findOne({ confirmed_hash: hash }, (err, data) => {
                if (err || !data) {
                    return res.status(404).json({
                        status: "error",
                        message: "Hash not found"
                    })
                }

                data.confirmed = true;
                data.save((err) => {

                    if (err) {
                        return res.status(404).json({
                            status: "error",
                            message: err
                        })
                    }

                    res.json({
                        status: "success",
                        message: "The account was successfully verified"
                    })
                })

            })
        }

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

        const postData = {
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            const Users = new UserModal(postData)

            Users
                .save()
                .then(data => {
                    res.json(data);
                    // Mailer.sendMail(
                    //     {
                    //         from: '<test_to_tst@mail.ru>',
                    //         to: postData.email,
                    //         subject: "Email confirmation",
                    //         html: `Click on the <a href="http://localhost:4000/verifi?hash=${data.confirmed_hash}">confirmation link</a>`,
                    //     },
                    //     (err, info) => {
                    //         if (err) console.log(err);
                    //         else console.log(info);
                    //     }
                    // );
                    
                })
                .catch(error => {
                    res.status(500).json({
                        status: "errors",
                        message: error
                    })
                })

        }

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

            if (bcrypt.compareSync(postData.password, data.password)) {
                const token = createJwtToken(data);
                res.json({
                    status: "success",
                    token,
                });
            } else {
                res.status(403).json({
                    status: "error",
                    message: "Incorrect password or email",
                });
            }

        })

    }

}

module.exports = UserController;