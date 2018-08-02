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
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?) ";
        connection.query(queryString, [burger], function (err, result) {
            if (err){
              throw err;
            } 
            cb(result);
        });
    },

    
  }

module.exports = orm;