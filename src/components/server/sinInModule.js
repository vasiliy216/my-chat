const mongoose = require('mongoose')

console.log('prevConnect');

const signUpTemplate = new mongoose.Schema({
    tel: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('tel_name', signUpTemplate)