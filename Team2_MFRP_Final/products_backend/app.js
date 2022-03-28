const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan') //logger
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port',(process.env.PORT || 4400))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api',api)
app.use(express.static('static'))
app.use(morgan('dev'))
app.use(function (req,res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

//MONGO DB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/virtualstandups',{useNewUrlParser: true})

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
    console.log('Connected to MongoDB')

    app.listen(app.get('port'),function(){
        console.log('API Server Listening on port '+ app.get('port')+'!')
    })
})