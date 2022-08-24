var express = require('express');
const premiumCalculator = require('../utils/premiumCalculator');
const calculateSchema = require('../utils/validations/calculate');
var router = express.Router();

/* GET premium */
router.post('/', async function(req, res, next) {
  try {
    await calculateSchema.validate(req.body, { abortEarly: false })
    const premium = premiumCalculator(req.body)
    res.send({ premium })
  } catch (error) {
    next(error)
  }  
});

module.exports = router;
