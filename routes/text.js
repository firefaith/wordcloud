var express = require('express');
var router = express.Router();

/* GET text listing. */
router.get('/', function(req, res) {
  res.send('text in server');
});

module.exports = router;
