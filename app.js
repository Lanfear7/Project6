const express = require('express');
const pug = require('pug');
const data = require('../Project6/data.json'); //require project data


//routes
const mainRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

const app = express();


app.set('view engine', 'pug');//set template engine to pug
app.use('/static', express.static('public'));//serve files from public folder

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);


//adds a listener on port 3000
app.listen('3000')


