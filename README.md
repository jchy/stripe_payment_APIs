# stripe_payment_APIs
In this project we will design and implement backend for Stripe Payment gateway integration for the follwoing APIs:~
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

#### Tech stacks used 
```js
  • Node.js
  • Express.js
  • JavaScript
```

### Guidelines to run this project:~
1. Clone this project by using the follwing command
```js
  git clone 
```

2. Navigate inside the folder where you cloned this project

3. Create a folder named < .env > by using the following command :~
```js
  mkdir .env
```
4. Navigate inside the .env folder and provide the follwing details there:~
```
  STRIPE_PAYMENT_PUBLIC_KEY= PUT_YOUR_STRIPE_PUBLIC_KEY_HERE
  STRIPE_PAYMENT_SECRET_KEY= PUT_YOUR_STRIPE_SECRET_KEY_HERE
  PORT= PUT_PORT_NUMBER_TO_RUN_THE_SERVER_HERE
```

5. Run the follwoing command in the terminal to install the node_modules and required packages to run this project
```js
 npm install
```

6. To run the server execute the follwoing command on your terminal
```js
 npm start
```

7. To perform the following operations like 

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
8. Goto to the following routes as per your requirements and apply the appropriate method with the required data mentioned in Postman or at client-side or anywhere you like
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
