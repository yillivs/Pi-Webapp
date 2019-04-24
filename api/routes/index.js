var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlDetail = require('../controllers/detail');
var ctrlAuth = require('../controllers/authentication');

// profile TODO: CHANGE THESE TO MY API ENDPOINTS
router.get('/detail', auth, ctrlDetail.detailRead);

router.post('/detail', ctrlDetail.detailWrite)
// authentication
router.post('/login', ctrlAuth.login);

router.post('/register',ctrlAuth.register);

module.exports = router;
