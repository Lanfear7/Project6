const express = require('express');
const router = express.Router();

router.get('/',(req, res) => { //dont need /about here because it assumed by app.js calling this file
    res.render('about') //render the about template
})


module.exports = router;