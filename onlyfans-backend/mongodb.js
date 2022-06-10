const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
let database

app.get('/', (req, res) => {
    res.send("welcome to mongodb api")
})

app.listen(5000, () => {
    MongoClient.connect('mongodb://localhost:2707', {useNewUrlParser: true}, (error, result) => {
        if(error) throw error
        database = result.db('MikesCluster')
        console.log("connection successful")
    })
})