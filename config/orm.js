var connection = require("./connection.js")

var orm = {
    selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    },
    insertOne: function(burger_name, cb) {
      connection.query("INSERT INTO burgers SET ?",
        {
          burger_name: burger_name,
          devoured: false
        }, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });

    },
    updateOne: function(burger_id, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?",[{devoured: true},{id: burger_id}], function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        });
    }
};

module.exports = orm;
