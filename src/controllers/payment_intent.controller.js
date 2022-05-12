require("dotenv").config();
const stripe = require("stripe")(`${process.env.STRIPE_PAYMENT_SECRET_KEY}`);

const createIntent =  async (req, res) => {
  return intent = await stripe.paymentIntents.create({
            'amount': 18 * 100, //convert shekels to agorot
            'currency': 'inr',
            'payment_method_types': ['card'],
            // 'capture_method': 'automatic',
            'capture_method': 'manual',
            'payment_method': "pm_card_visa",
            'confirm' : false,
  })
  .then(async(intent) => {
     intent = await stripe.paymentIntents.confirm(intent.id);
    res.send(generateResponse(intent));
  })
  .catch((error)=>{
    res.status(400).json({ message: error.message, intent: intent});
  })
};

const generateResponse = (intent) => {
  // Note that if your API version is before 2019-02-11, 'requires_action'
  // appears as 'requires_source_action'.
  if (
    intent.status === 'requires_action' &&
    intent.next_action.type === 'use_stripe_sdk'
  ) {
    // Tell the client to handle the action
    return {
      requires_action: true,
      payment_intent_client_secret: intent.client_secret,
      intent : intent
    };
  } else if (intent.status === 'succeeded') {
    // The payment didn’t need any additional actions and completed!
    // Handle post-payment fulfillment
    return {
      success: true
    };
  } else {
    // Invalid status
    return {
      error: 'Invalid PaymentIntent status'
    }
  }
};


const captureIntent =  async (req, res) => {
  const intent_id = req.params.id
  const intent = await stripe.paymentIntents.capture(intent_id)
  .then((response) => {
    return res.status(200).json({ message: "success", intent: intent });
  })
  .catch((error) => {
    return res.status(400).json({ message: "failure",description: error.message});
  })
};



const createRefund = async(req, res)=>{
    const refund = await stripe.refunds.create({
      payment_intent: req.params.id,
    }).
      then(() => {
        return res.status(200).json({data : refund})
      })
      .catch((error) => {
        return res.status(400).json({message : error.message, suggestions : "Please make sure the charges exist on the paymentIntent id you provided"});
      })
};

const getIntents = async (req, res) => {
    const paymentIntents = await stripe.paymentIntents.list({
        // limit: 3,
      });
      return res.status(200).json({data: paymentIntents});
};

module.exports = {
    getIntents,
    createIntent,
    captureIntent,
    createRefund
}