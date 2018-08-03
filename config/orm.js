var connection = require("./connection")


var orm = {
    all: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },


    create: function(burger, cb,) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false) ";
        connection.query(queryString, [burger], function (err, result) {
            if (err){
              throw err;
            } 
            cb(result);
        });
    },

  //   update: function (id, cb) {
  //     var queryString = "UPDATE burgers SET devoured = true WHERE id = false)";

  //     connection.query(queryString, [id], function (err, result) {
  //         if (err) {
  //             throw err;
  //         }
  //         cb(result);
  //     });
  // }

    
  }

module.exports = orm;