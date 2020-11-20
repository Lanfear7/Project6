const express = require('express');
const router = express.Router();
const data = require('../data.json'); //require project data

router.get('/', (req, res,) => {
    console.log('redirecting')
    res.redirect('/projects/0')
})

router.get('/:id',(req, res, next) => {
    const { projects } = data
    if (projects[req.params.id]){
       res.render('project', {projects: projects[req.params.id]}) //projects[req.params.id] send the correct data to the pug  => req.params.id will reference :id
    } else {
        // otherwise throw the default error
        const err = new Error('Project Not found');
        err.status = 404;
        next(err)
    }
})

module.exports = router;