const express = require('express');
const Joi = require('joi')
const mongoose = require('mongoose');
require('dotenv/config')

// import routes
const postsRoute = require('./routes/posts');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to db!')
})

app.use(express.json());

// middlewares
app.use('/posts', postsRoute);


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

// get requests
app.get('/', (req, res) => {
    res.send('Hello World');
    res.end();
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
    res.end()
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found')
    res.send(course);
    res.end()
});

// post request
app.post('/api/courses', (req, res) => {
    const newCourse = {
        id: courses.length+1,
        name: req.body.name
    }
    const validate = validateCourse(newCourse);
    if (Joi.isError(validate)) {
        return res.status(400).send(validate.details)
        
    }
    courses.push(newCourse);
    res.send(newCourse);
    res.end();
});

// put request
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found')

    const newCourse = validateCourse({id: req.params.id, name: req.body.name});
    if (Joi.isError(newCourse)) {
        return res.status(400).send(newCourse.details);
    }
    course.name = req.body.name
    res.send(course);
    res.end();
});

// delete request
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given id was not found')

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
    res.end();
});

// check to see if req body is valid
function validateCourse(course) {
    const schema = Joi.object({
        id: Joi.number(),
        name: Joi.string()
        .min(3)
        .required()
    })
    return schema.validate(course)
}

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})