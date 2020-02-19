/**
 * General route for /.
 */
"use strict";

var express = require('express');
var router = express.Router();

// Add a route for the path /
router.get('/', (req, res) => {
    res.send("Welcome to Assignment 4: please type /lotto or /report.html on the URL");
});

module.exports = router;