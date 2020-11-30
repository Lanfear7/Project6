const express = require('express');
const router = express.Router();
const data = require('../data.json'); //require project data

router.get('/',(req, res) => {
    res.render('index', {data: data}) //render the index template from the views folder (express will look for the folder views)
    console.log('in render')
})

module.exports = router; //makes it possible to work with the router from this file