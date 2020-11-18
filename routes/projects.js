const express = require('express');
const router = express.Router();
const data = require('../data.json'); //require project data

router.get('/:id',(req, res) => {
    const { projects } = data
    console.log(projects[req.params.id]) //req.params.id will reference :id
    res.render('project', {projects: projects[req.params.id]}) //projects[req.params.id] send the correct data to the pug 
})

module.exports = router;