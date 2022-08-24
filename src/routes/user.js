var express = require('express');
const { postUser } = require('../dbservices/postUser');
var router = express.Router();
const saveUserSchema = require('../utils/validations/user');

/* SAVE user and his premium. */
router.post('/', async function(req, res, next) {
  try {
    const payload = {
      ...req.body
    }
    await saveUserSchema.validate(payload, { abortEarly: false })
    await postUser(payload)
    res.status(200).json({ success: true, message: 'user saved successfully'})
  } catch (error) {
    console.log(error)
    next(error)
  }  
});

module.exports = router;
