const express = require('express');
const router = express.Router();
const sinInModule = require('./sinInModule');

router.post('/signup', (req, res) => {
    const sinUsers = new sinInModule({
        tel: req.body.tel,
        name: req.body.name
    })

    console.log(req.body.tel)

    sinUsers.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports = router