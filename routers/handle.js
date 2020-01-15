const express = require("express");
const router = express.Router();

const connection = require("../config/connection");
const orm = require("../config/orm");
router.get("/", (req, res) => {
  orm.SelectALL(function(err, burger) {
    if (err) {
      res.status(501).json({
        message: "unable to connect "
      });
    } else {
      res.render("index");
    }
  });
});
router.get("/database", (req, res) => {
  connection.query("SELECT * FROM sample", function(err, result, fields) {
    if (!!err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("Created database");
    }
  });
});
module.exports = router;
