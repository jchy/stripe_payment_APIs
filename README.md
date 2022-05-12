# stripe_payment_APIs
In this project we will design and implement backend APIs for Stripe Payment gateway integration.

Problem :~
```js

 Get a List of all intents
   • GET /api/v1/get_intents

 Create intent for payment
  • POST /api/v1/create_intent
  
 Capture the created intent
  • POST /api/v1/capture_intent/:id
  
 Create a refund for the created intent 
  • POST /api/v1/create_refund/:id
  
```


Solution:~
```js

 APIs to get a List of all intents
   • GET http://localhost:5000/api/v1/get_intents

 APIs for creating intent is 
   • POST http://localhost:5000/api/v1/create_intent

  APIs for capture intent is 
   • POST http://localhost:5000/api/v1/capture_intent/put_the_payment_intent_id_here
   
  APIs for a refund for the created intent  
   • POST http://localhost:5000/api/v1/create_refund/put_the_payment_intent_id_here
      
```
