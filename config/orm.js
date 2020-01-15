const connection = require("./connection");
const orm = {
  SelectALL: function(cb) {
    connection.query("SELECT * FROM restaurant_burger", function(error, data) {
      if (error) cb(error, null);
      cb(null, data);
    });
  }
};

module.exports = orm;
