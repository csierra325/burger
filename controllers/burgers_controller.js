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

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.update(id, function () {
        res.redirect("/");
    });
});


router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function () {
        res.redirect("/"); // reload the page
    });
});




// // Export routes for server.js to use.
module.exports = router;