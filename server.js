// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()



// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//CONTROLLERS
const bandsController = require('./controllers/bands_controller')
app.use('/events', require('./controllers/event_controller')) // Require the events controller
app.use('/stages', require('./controllers/stage_controller'))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// SEQUELIZE CONNECTION 
// DATABASE
const { sequelize } = require('./models') 
//const sequelize = new Sequelize(process.env.DB_CONNECTION)
const testSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been establisshed sucessfully')
    } catch (error) {
        console.log('Unable to connect to database', error);     
    }
}

// LISTEN
app.listen(process.env.PORT, async () => {
    await testSequelize()
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})