const express = require('express');
const pug = require('pug');
const data = require('./data.json'); //require project data


//routes
const mainRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

const app = express();

app.set('port', process.env.PORT || 3000);//sets the port to 3000 if no port
app.set('view engine', 'pug');//set template engine to pug
app.use('/static', express.static('public'));//serve files from public folder

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);

//Global error handling\
app.use((err, req, res, next) => {
    console.log(err)
    if(err.status === 404){
        console.log('*******pageError*******')
        res.render('not-found',  { err })
    }else {
        console.log('*********serverError*********')
        err.message = err.message || 'Looks like there was a server error'
        err.status = err.status || 500
        res.render('error', { err })
    }
})

//adds a listener on port 3000
app.listen(process.env.PORT || '3000')


