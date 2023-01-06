const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config')

mongoose.set('strictQuery', true)

// import routes
const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments')

const app = express();

const connectDB = (url) => {
    mongoose
    .connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(() => console.log('connected to db!'))
}

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/images', express.static('images'))

// routes
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute)

app.use('*', (req, res) => {
    res.status(400).send('Not found.')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        const port = process.env.PORT || 5000
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`)
        })
    } catch (error) {
        console.error(error)
    }
}

start()

// PORT