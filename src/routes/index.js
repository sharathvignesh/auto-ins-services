var express = require('express');
var router = express.Router();

/* calculate premium */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'home page' });
});

module.exports = router;
