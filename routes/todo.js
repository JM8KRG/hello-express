var express = require("express");
var router = express.Router();
var mysql = require("mysql");

// 設定情報
var mySqlConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "test"
};

router.get("/", function(req, res, next) {
  // コネクションの用意
  var connection = mysql.createConnection(mySqlConfig);

  connection.connect();

  connection.query("SELECT todo FROM todos", (error, results, fields) => {
    if (error == null) {
      res.json(results);
    }
  });

  connection.end();
});

module.exports = router;
