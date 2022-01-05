const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
exports.json = bodyParser.json;

app.use(cors())


//connect DB
connectDB()

//init Middleware
app.use(express.json({extended: false}))

const PORT = 5000


// define Routes
app.use('/api/users', require("./routes/users"))


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})