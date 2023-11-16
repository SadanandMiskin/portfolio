const mongoose = require('mongoose')

const onlineSchema = mongoose.Schema({
    id: Number,
    status: String,
    stat: Boolean,
    file: String
    }

)

module.exports = mongoose.model('onlineSchema', onlineSchema,'StatusCheck' )
