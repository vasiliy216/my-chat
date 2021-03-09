const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    tel: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tel_name', signUpTemplate)