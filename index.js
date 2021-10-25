const express = require('express')
const app = express()
const port = 3000
const database = require('./database')

app.use(
    express.urlencoded({
    extended: true
  })
)

app.use(express.json())


app.post('/insert', (req, res) => {
    if(req.body){
        database(req.body.name, req.body.age)
        res.send("OK")
    }
})

app.listen(port, () => {
    console.log("Application started!")
})
