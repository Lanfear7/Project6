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

//adds a listener on port 3000
app.listen(process.env.PORT || '3000')//listen on the port in no port set port to 3000

//set up routes
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);


app.use(( req, res, next) => {
    var err = new Error('Page not found')
    err.status = 404;
    console.log(`Error ${err.status} ${err.message}`)
    res.render("not-found", { err });

});

//Global error handling\
app.use((err, req, res, next) => {
    if (err.status === 404) {
        console.log(`Error ${err.status} ${err.message}`)
        res.status(404).render("not-found", { err });
      } else {
        console.log(`Error ${err.status} ${err.message}`)
        err.message = err.message || `Something went wrong on the server.`;
        res.status(err.status || 500).render("error", { err });
      }
});






