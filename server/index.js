const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express()

app.use(cors())
app.use(express.json)
app.use(jsonParser)

http
    .createServer(app)
    .listen(4444)

app.get((req, res) => {
    res.send("server ok")
})