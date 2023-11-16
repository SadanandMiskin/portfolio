const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
        name: String,
        email: String,
        message: String,
    }, {
        collection: 'Messages' 
    }

)

const message = mongoose.model('message', messageSchema)
module.exports = message