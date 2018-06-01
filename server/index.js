const express = require('express')
const bodyParser = require('body-parser')
massive = require('massive')
controller = require('./controller')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))



app.get('/api/houses', controller.getList)
app.post('/api/addhouse', controller.addhouse)


const port = 4000
app.listen(port, () => console.log(`server is listening on port ${port}`))
