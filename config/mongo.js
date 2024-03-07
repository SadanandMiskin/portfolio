const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.URI)
        console.log('Mongo Connected')
    }
    catch(e){
        console.log(e)
    }
}

module.exports = dbConnect
