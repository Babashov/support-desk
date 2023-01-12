const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')
const PORT = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')

// Connect DB
connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.status(404).json('Hello')
})

app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))