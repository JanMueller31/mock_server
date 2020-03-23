const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const indexRouter = require('./services/index')
const authService = require('./services/authService')
const profileService = require('./services/profileService')
const todoServcie = require('./services/todoService')

app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/auth', authService)
app.use('/profiles', profileService)
app.use('/todos', todoServcie)

app.listen(process.env.PORT || 3000)

