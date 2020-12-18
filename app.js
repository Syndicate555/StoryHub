const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db') // connecting the MongoDB database
const morgan = require('morgan') // for log in
const exphbs = require('express-handlebars')
//load config 
dotenv.config({path: './config/config.env'})

connectDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
 app.use(morgan('dev'))
}
const PORT = process.env.PORT || 4545
app.listen(PORT, console.log(`Surver running in ${process.env.NODE_ENV} mode on port ${PORT}`))
