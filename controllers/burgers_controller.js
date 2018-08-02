var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

//  Create the `router` for the app, and export the `router` at the end of your file.

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.render('index', hbsObject);
    });

});

router.post("/", function (req, res) {
    burger.create(req.body.burger_name, function () {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});




// // Export routes for server.js to use.
module.exports = router;