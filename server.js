const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const ejs = require('ejs')
const path = require('path')
const app = express()
var port = process.env.PORT
 const db = require('./config/mongo')
const Message = require('./models/message')
const status = require('./models/online')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('assets'))


app.get('/' ,async (req,res)=>{
        try{
            const statusm = await status.findOne({id: 1})
            res.render('index',{thankYouMessage: '' , status: statusm})
        console.log(statusm)
        }
        catch(Err){
            console.log(Err)
            res.redirect('/')
        }
        
    
})
app.get('/thanks',(req,res)=>{
    res.render('thanks')
})
app.post('/' ,async(req,res)=>{
    try{
        const {name,email,message} =req.body
        const newMessage = new Message({
            name: name,
            message: message,
            email: email,
            
        })
        await newMessage.save()
        console.log('New Message')
        
       res.redirect('/thanks')
        
        
    }
    catch(err){
        console.log(err)
    }
})
db
.then(
    app.listen(port || 3000 , ()=>{
        console.log('listening')
    })
)