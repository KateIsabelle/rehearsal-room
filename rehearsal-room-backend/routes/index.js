var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "you": "shouldn't be here!",
    "you should": "try an API route, like /api/users"
  });
});

module.exports = router;
