const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const app = express();
const {sequelize} = require("./models")


app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send({
        message: 'hewwo'
    })
})


sequelize.sync().then(() => {
    app.listen(process.env.PORT)
    console.log("server started!");
})
