const express = require('express');
const pug = require('pug');
const data = require('../Project6/data.json'); //require project data

const app = express();


app.set('view engine', 'pug')//set template engine to pug
app.use('/static', express.static('public'))//serve files from public folder

app.get('/',(req, res) => {
    res.render('index', {data: data.projects}) //render the index template from the views folder (express will look for the folder views)
})

app.get('/about',(req, res) => {
    res.render('about') //render the about template
})

//adds a listener on port 3000
app.listen('3000')


