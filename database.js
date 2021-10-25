const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/mydb"

function connection(name, age){
    MongoClient.connect(url, (err, db) => {
        if(err) throw err
        const dbo = db.db("mydb")
        dbo.collection("customers").insertOne({name : name, age : age}, (err, res) => {
            if(err) throw err
            console.log("Data inserted")
            db.close()
        })
    })
}

module.exports = connection
