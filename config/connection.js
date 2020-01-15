const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});
connection.connect(function(err) {
  if (err) console.log("Oops... Something went wrong");
  else {
    console.log("Server connected");
  }
});

module.exports = connection;
