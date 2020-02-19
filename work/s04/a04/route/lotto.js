/**
 * Route for lotto.
 */
"use strict";

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {

    let values = [];
    let holder = [];

    for (let i = 0; i < 7; i++) {
        holder.push(Math.floor(Math.random() * (35 - 1 + 1)) + 1);
    }

    values.lotto = holder;
    res.render("lotto", values);

});

module.exports = router;