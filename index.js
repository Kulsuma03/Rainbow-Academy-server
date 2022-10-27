const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('assignment 10 server data running');
});

// load categories 

app.get('/categories', (req, res) => {
    res.send(categories);
});

// click for categories Item by id

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const checkout = courses.find(c => c.id == id);
    res.send(checkout);
})

// load courses

app.get('/courses', (req, res) => {
    res.send(courses)
})

// click for course by id

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id == id);
    res.send(course);
})

app.listen(port, () => {
    console.log('server is running', port)
})