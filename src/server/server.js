const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotevn = require("dotenv")
const bodyParser = require("body-parser")

const UserModal = require("../server/schemas/User")
const app = express();

app.use(cors())
app.use(bodyParser.json())

dotevn.config()

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById(id, (err, user) => {
        if (err) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.json(user);
    })
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findOneAndRemove({_id: id})
    .then(data => {
        res.json({
            message: 'User deleted'
        })
    })
    .catch(err => {
        res.json({
            message: 'User not found'
        })
    })
})

app.post('/user/registr', (req, res) => {
    const Users = new UserModal({
        email: req.body.email,
        fullName: req.body.fullName,
        password: req.body.password,
    })

    Users.save()
    .then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
});

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.listen(4000, () => {
    console.log('Server connected')
})