const express = require('express');
const paymentRoute = express.Router();
const {getIntents, createIntent, captureIntent, createRefund } = require('../controllers/payment_intent.controller')

paymentRoute.get("/get_intents", getIntents);

paymentRoute.post("/create_intent", createIntent);

paymentRoute.post("/capture_intent/:id", captureIntent);

paymentRoute.post("/create_refund/:id", createRefund);

module.exports = paymentRoute;