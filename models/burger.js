var orm = require("../config/orm.js");

var burger = {
    all : function(callback) {
        orm.all(function(res) {
            callback(res);
        });
    },
    create : function(burger_name, callback) {
        orm.create(burger, function(res) {
            callback(res);
        });
    },
    update : function(id, callback) {
        orm.update([id], function(res) {
            callback(res);
        });
    }
    
};

module.exports = burger;