const express = require('express');
const { request } = require('express');
const router = express.Router();
const sinInModule = require('./sinInModule');

router.post('/signup', (req, res) => {
    const sinUsers = new sinInModule({
        tel: request.body.tel,
        name: request.body.name
    })
    sinUsers.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

//router.get('/signin')
module.exports = router