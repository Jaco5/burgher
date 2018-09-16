var connection = require("./connection.js")

//select all
//insert 1
//update 1

var orm = {
    all : function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    create: function (burger, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger,
            devoured: false,
            }, function (err, result) {
            if (err) throw err;
            callback(result);
          });
    },
    update : function(id, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
            if (err) throw err;
            callback(result);
          });
    },
   
}
module.exports = orm;