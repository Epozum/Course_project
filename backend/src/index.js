const mongoose = require("mongoose");
const express = require('express');
const Router = express.Router;
const cors = require("cors");

const filmRouter = require('./modules/film/router')

// подключение
mongoose.connect("mongodb://localhost:27017/FilmX_DB", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err)
    })

const router = Router()
filmRouter(router)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(4000)
