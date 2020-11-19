const express = require('express');
const router = express.Router();
const data = require('../data.json'); //require project data

router.get('/', (req, res,) => {
    
    const num = req.url[1]
    console.log(num)
    if(isNaN(num)){
        const err = new Error('Page not found')
        err.status = 404
        throw err
    } else {
        //this will redirect a user if the just type in projects to the first project
        res.redirect('/projects/0')
    }
    
})

router.get('/:id',(req, res) => {
    const { projects } = data
    res.render('project', {projects: projects[req.params.id]}) //projects[req.params.id] send the correct data to the pug  => req.params.id will reference :id
    

    

})

module.exports = router;