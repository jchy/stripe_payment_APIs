require("dotenv").config();
const stripe = require("stripe")(`${process.env.STRIPE_PAYMENT_SECRET_KEY}`);

// asynchronous function to create the the paymentIntents
const createIntent =  async (req, res) => {
  return intent = await stripe.paymentIntents.create({
            'amount': 18 * 100,
            'currency': 'inr',
            'payment_method_types': ['card'],
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
  if(intent.status === 'requires_action' && intent.next_action.type === 'use_stripe_sdk'){
    // Tell the client to handle the action
    return {
      requires_action: true,
      payment_intent_client_secret: intent.client_secret,
      intent : intent
    };
  } 
  else if(intent.status === 'succeeded'){
    // The payment didn’t need any additional actions and completed!
    // Handle post-payment fulfillment
    return {
      success: true
    };
  } 
  else{
    // Invalid status
    return {
      error: 'Invalid PaymentIntent status'
    }
  }
};


// asynchronous function to capture the paymentIntents by intent_id
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


// asynchronous function to create a refund for paymentIntents by intent_id
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

// asynchronous function to list all for paymentIntents
const getIntents = async (req, res) => {
    return intents = await stripe.paymentIntents.list({
        // using limit we can limit the number of paymentIntents we wants to retrieve in following manner
        // limit : 5 => This will limit the number of paymentIntents to be retrieved to 5 only
    })
    .then((intents) => {
      return res.status(200).json({data: intents});
    })
    .catch(err => {
      return res.status(400).json({message: err.message});
    })
};

module.exports = {
    getIntents,
    createIntent,
    captureIntent,
    createRefund
}