var connection = require("./connection.js")



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
    create: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', {burger_name: burger_name}, function (err, result) {
            if (err) throw err;
            cb(result);
          });
    },
    update : function(id, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
            if (err) throw err;
            cb(result);
          });
    },
   
}
module.exports = orm;