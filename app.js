if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const cors = require('cors')
const express = require('express')
const app = express()

const getNews = require("./apis/getNews")
let cron = require('node-cron')

const port = 3000

const index = require('./routes/index')
const errorHandler = require('./midleware/errorHandler')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


cron.schedule(' 49 21 * * *', async (_) => {
    console.log("fleching news")
    await getNews()
    console.log("done")
})


app.use('/', index)

app.use(errorHandler)



app.listen(port, function () {
    console.log(`This app running on port ${port}`)
})