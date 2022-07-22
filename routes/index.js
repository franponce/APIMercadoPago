const express = require('express');
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentsService = require("../Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentsService());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  PaymentInstance.createPayment(req, res);
});

router.get('/subscription', function(req, res, next) {
  PaymentInstance.createSubscription(req, res);
});

module.exports = router;
