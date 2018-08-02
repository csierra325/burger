var orm = require("../config/orm")

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`
var burger = {
    all: function (cb) {
        orm.all(function (res) {
            cb(res);
        });
    },

    create: function (burger, cb) {
        orm.create(burger, function (res) {
            cb(res);
        });
    },

   
};

module.exports = burger;