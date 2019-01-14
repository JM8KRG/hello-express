var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  // よくある連想配列
  const todoList = [
    { title: "Node.js", content: "Express" },
    { title: "PHP", content: "Laravel" },
    { title: "Python", content: "Django" }
  ];

  // 配列をJsonで返す
  res.json(todoList);
});

module.exports = router;
