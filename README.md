# stripe_payment_APIs
In this project we will design and implement backend APIs for Stripe Payment gateway integration.

### Steps to use this project:~
- 1. Clone this project by using the follwing command
```js
  git clone 
```

- 2. Navigate inside the folder where you clones this project

- 3. Run the follwoing command in the terminal to install the node_modules and required packages to run this project
```js
 npm install
```

- 4. To run the server execute the follwoing command on your terminal
```js
 npm start
```

- 5. To perform the following operations like 

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
- 6. Goto to the following routes as per your requirements and apply the appropriate method with the required data mentioned in Postman or at client-side or anywhere you like
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
