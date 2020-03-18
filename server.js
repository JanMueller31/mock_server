const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const indexRouter = require('./services/index')
const authService = require('./services/auth')
const profileService = require('./services/profile')
const todoServcie = require('./services/todo')

app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/auth', authService)
/app.use('/profile', profileService)
app.use('/todo', todoServcie)

app.listen(process.env.PORT || 3000)

