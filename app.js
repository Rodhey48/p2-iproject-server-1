const cors = require('cors')
const express = require('express')
const app = express()

const port = 3001

const index = require('./routes/index')
const errorHandler = require('./midleware/errorHandler')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use('/', index)

app.use(errorHandler)



app.listen(port, function () {
    console.log(`This app running on port ${port}`)
})