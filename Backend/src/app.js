const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/', require('./routes/index'))
app.use('/', require('./routes/personagemRoutes'))

module.exports = app