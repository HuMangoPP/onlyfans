const express = require('express');
const Joi = require('joi')
const mongoose = require('mongoose');
const request = require('request')
const cors = require('cors')
require('dotenv/config')

// import routes
const postsRoute = require('./routes/posts');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db!')
})

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

// middlewares
app.use('/posts', postsRoute);

// PORT
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})