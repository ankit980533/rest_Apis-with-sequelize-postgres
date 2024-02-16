//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
 const db = require('./models')
 const userRoutes = require ('./routes/userRoutes')
 const eqcRoutes=require('./routes/eqcRoutes')


const PORT = process.env.PORT || 8080


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


db.sequelize.sync().then(() => {
    console.log("db has been  sync")

})


app.use('/api/users', userRoutes)
app.use('/api/eqc',eqcRoutes)


//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))