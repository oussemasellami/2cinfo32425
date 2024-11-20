var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/show", function (req, res, next) {
  res.send("salut 2cinfo3");
});

module.exports = router;
