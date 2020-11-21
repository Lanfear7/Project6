const express = require('express');
const router = express.Router();
const data = require('../data.json'); //require project data

router.get('/',(req, res) => {
    res.render('index', {data: data.projects}) //render the index template from the views folder (express will look for the folder views)
})
//error handling 
router.use((req, res, next) =>{
    var err = new Error('Page not found')
    err.status = 404
    next(err)
})

module.exports = router; //makes it possible to work with the router from this file