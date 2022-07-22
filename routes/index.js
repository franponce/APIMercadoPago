const express = require('express');
const router = express.Router();

const PaymentController = require("../Controllers/PaymentsController");
const PaymentsService = require("../Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentsService());

router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

router.get('/payment', function(req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

router.get('/subscription', function(req, res, next) {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
