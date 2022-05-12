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
<!-- 8. Goto to the following routes as per your requirements and apply the appropriate method with the required data mentioned in Postman or at client-side or anywhere you like -->

8. To get a list of all the intents go to postman or any other similar tool and use the follwoing method and API
```js
   • method : GET 
   • API : http://localhost:5000/api/v1/get_intents
   
   • Response of this will look similar to the following

   {
    "data": {
        "object": "list",
        "data": [
            {
                "id": "pi_3KyTU6SC9liGGbLo0tLJ1O4k",
                "object": "payment_intent",
                "amount": 1800,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {}
                },
                "amount_received": 0,
                "application": null,
                "application_fee_amount": null,
                "automatic_payment_methods": null,
                "canceled_at": null,
                "cancellation_reason": null,
                "capture_method": "manual",
                "charges": {
                    "object": "list",
                    "data": [],
                    "has_more": false,
                    "total_count": 0,
                    "url": "/v1/charges?payment_intent=pi_3KyTU6SC9liGGbLo0tLJ1O4k"
                },
                "client_secret": "pi_3KyTU6SC9liGGbLo0tLJ1O4k_secret_4mnVLRLzrWpYhR8y7LPAyUiqK",
                "confirmation_method": "automatic",
                "created": 1652329122,
                "currency": "inr",
                "customer": null,
                "description": null,
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": {
                    "type": "use_stripe_sdk",
                    "use_stripe_sdk": {
                        "type": "three_d_secure_redirect",
                        "stripe_js": "https://hooks.stripe.com/redirect/authenticate/src_1KyTU7SC9liGGbLoLwI4BrZN?client_secret=YOUR_SECRET_KEYS_WILL_BE_DISPLAYED_HERE",
                        "source": "src_1KyTU7SC9liGGbLoLwI4BrZN"
                    }
                },
                "on_behalf_of": null,
                "payment_method": "pm_1KyTU6SC9liGGbLoOBumfHxe",
                "payment_method_options": {
                    "card": {
                        "installments": null,
                        "mandate_options": null,
                        "network": null,
                        "request_three_d_secure": "automatic"
                    }
                },
                "payment_method_types": [
                    "card"
                ],
                "processing": null,
                "receipt_email": null,
                "review": null,
                "setup_future_usage": null,
                "shipping": null,
                "source": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "requires_action",
                "transfer_data": null,
                "transfer_group": null
            },
            {
                "id": "pi_3KyTRLSC9liGGbLo0OdidH3f",
                "object": "payment_intent",
                "amount": 1800,
                "amount_capturable": 0,
                "amount_details": {
                    "tip": {}
                },
                "amount_received": 0,
                "application": null,
                "application_fee_amount": null,
                "automatic_payment_methods": null,
                "canceled_at": null,
                "cancellation_reason": null,
                "capture_method": "manual",
                "charges": {
                    "object": "list",
                    "data": [],
                    "has_more": false,
                    "total_count": 0,
                    "url": "/v1/charges?payment_intent=pi_3KyTRLSC9liGGbLo0OdidH3f"
                },
                "client_secret": "pi_3KyTRLSC9liGGbLo0OdidH3f_secret_REhf67crxstHID5xihs9tisIA",
                "confirmation_method": "automatic",
                "created": 1652328951,
                "currency": "inr",
                "customer": null,
                "description": null,
                "invoice": null,
                "last_payment_error": null,
                "livemode": false,
                "metadata": {},
                "next_action": {
                    "type": "use_stripe_sdk",
                    "use_stripe_sdk": {
                        "type": "three_d_secure_redirect",
                        "stripe_js": "https://hooks.stripe.com/redirect/authenticate/src_1KyTRLSC9liGGbLoWBDAQ5PC?client_secret=YOUR_SECRET_KEYS_WILL_BE_DISPLAYED_HERE",
                        "source": "src_1KyTRLSC9liGGbLoWBDAQ5PC"
                    }
                },
                "on_behalf_of": null,
                "payment_method": "pm_1KyTRKSC9liGGbLoxgay896u",
                "payment_method_options": {
                    "card": {
                        "installments": null,
                        "mandate_options": null,
                        "network": null,
                        "request_three_d_secure": "automatic"
                    }
                },
                "payment_method_types": [
                    "card"
                ],
                "processing": null,
                "receipt_email": null,
                "review": null,
                "setup_future_usage": null,
                "shipping": null,
                "source": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "requires_action",
                "transfer_data": null,
                "transfer_group": null
            }
          ]
       }
```

9. To create an intent go to postman or any other similar tool and use the follwoing Method and API
```js
  • Method : POST 
  • API : http://localhost:5000/api/v1/create_intent
  • Response of this will look like this
   {
    "requires_action": true,
    "payment_intent_client_secret": "pi_3KyV7zSC9liGGbLo1px7Ygcp_secret_qS079xjht98K6nn5cq7qhwSbJ",
    "intent": {
        "id": "pi_3KyV7zSC9liGGbLo1px7Ygcp",
        "object": "payment_intent",
        "amount": 1800,
        "amount_capturable": 0,
        "amount_details": {
            "tip": {}
        },
        "amount_received": 0,
        "application": null,
        "application_fee_amount": null,
        "automatic_payment_methods": null,
        "canceled_at": null,
        "cancellation_reason": null,
        "capture_method": "manual",
        "charges": {
            "object": "list",
            "data": [],
            "has_more": false,
            "total_count": 0,
            "url": "/v1/charges?payment_intent=pi_3KyV7zSC9liGGbLo1px7Ygcp"
        },
        "client_secret": "pi_3KyV7zSC9liGGbLo1px7Ygcp_secret_qS079xjht98K6nn5cq7qhwSbJ",
        "confirmation_method": "automatic",
        "created": 1652335439,
        "currency": "inr",
        "customer": null,
        "description": null,
        "invoice": null,
        "last_payment_error": null,
        "livemode": false,
        "metadata": {},
        "next_action": {
            "type": "use_stripe_sdk",
            "use_stripe_sdk": {
                "type": "three_d_secure_redirect",
                "stripe_js": "https://hooks.stripe.com/redirect/authenticate/src_1KyV80SC9liGGbLo3uycj8AN?client_secret=src_client_secret_pXHh4uyywExySXuhrusFxxQX&source_redirect_slug=test_YWNjdF8xS3NtQVZTQzlsaUdHYkxvLF9MZnFwaThVcGprRFlHb2VKaXVJMGFOY3JsV1E2TFBB0100vE2aSKu9",
                "source": "src_1KyV80SC9liGGbLo3uycj8AN"
            }
        },
        "on_behalf_of": null,
        "payment_method": "pm_1KyV7zSC9liGGbLohHVdkZN1",
        "payment_method_options": {
            "card": {
                "installments": null,
                "mandate_options": null,
                "network": null,
                "request_three_d_secure": "automatic"
            }
        },
        "payment_method_types": [
            "card"
        ],
        "processing": null,
        "receipt_email": null,
        "review": null,
        "setup_future_usage": null,
        "shipping": null,
        "source": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "requires_action",
        "transfer_data": null,
        "transfer_group": null
      }
    }
```

10. To capture an intent go to postman or any other similar tool and use the follwoing Method and API
```js
   • method : POST 
   • API : http://localhost:5000/api/v1/capture_intent/put_the_payment_intent_id_here
   • If everything goes will you will get the follwoing response
      {
          "id": "pi_3KyV7zSC9liGGbLo1px7Ygcp",
          "object": "payment_intent",
          "amount": 1000,
          "amount_capturable": 0,
          "amount_details": {
            "tip": {}
          },
          "amount_received": 1000,
          "application": null,
          "application_fee_amount": null,
          "automatic_payment_methods": null,
          "canceled_at": null,
          "cancellation_reason": null,
          "capture_method": "automatic",
          "charges": {
            "object": "list",
            "data": [
              {
                "id": "ch_1EXUPv2eZvKYlo2CStIqOmbY",
                "object": "charge",
                "amount": 1000,
                "amount_captured": 1000,
                "amount_refunded": 0,
                "application": null,
                "application_fee": null,
                "application_fee_amount": null,
                "balance_transaction": "txn_1EXUPv2eZvKYlo2CNUI18wV8",
                "billing_details": {
                  "address": {
                    "city": null,
                    "country": null,
                    "line1": null,
                    "line2": null,
                    "postal_code": null,
                    "state": null
                  },
                  "email": null,
                  "name": null,
                  "phone": null
                },
                "calculated_statement_descriptor": "Stripe",
                "captured": true,
                "created": 1557239835,
                "currency": "usd",
                "customer": null,
                "description": "One blue fish",
                "disputed": false,
                "failure_balance_transaction": null,
                "failure_code": null,
                "failure_message": null,
                "fraud_details": {},
                "invoice": null,
                "livemode": false,
                "metadata": {},
                "on_behalf_of": null,
                "outcome": {
                  "network_status": "approved_by_network",
                  "reason": null,
                  "risk_level": "normal",
                  "risk_score": 9,
                  "seller_message": "Payment complete.",
                  "type": "authorized"
                },
                "paid": true,
                "payment_intent": "pi_3KyV7zSC9liGGbLo1px7Ygcp",
                "payment_method": "pm_1EXUPv2eZvKYlo2CUkqZASBe",
                "payment_method_details": {
                  "card": {
                    "brand": "visa",
                    "checks": {
                      "address_line1_check": null,
                      "address_postal_code_check": null,
                      "cvc_check": null
                    },
                    "country": "US",
                    "exp_month": 5,
                    "exp_year": 2020,
                    "fingerprint": "Xt5EWLLDS7FJjR1c",
                    "funding": "credit",
                    "installments": null,
                    "last4": "4242",
                    "mandate": null,
                    "moto": null,
                    "network": "visa",
                    "three_d_secure": null,
                    "wallet": null
                  },
                  "type": "card"
                },
                "receipt_email": null,
                "receipt_number": "1230-7299",
                "receipt_url": "https://pay.stripe.com/receipts/acct_1032D82eZvKYlo2C/ch_1EXUPv2eZvKYlo2CStIqOmbY/rcpt_F1XUd7YIQjmM5TVGoaOmzEpU0FBogb2",
                "redaction": null,
                "refunded": false,
                "refunds": {
                  "object": "list",
                  "data": [],
                  "has_more": false,
                  "url": "/v1/charges/ch_1EXUPv2eZvKYlo2CStIqOmbY/refunds"
                },
                "review": null,
                "shipping": null,
                "source_transfer": null,
                "statement_descriptor": null,
                "statement_descriptor_suffix": null,
                "status": "succeeded",
                "transfer_data": null,
                "transfer_group": null
              }
            ],
            "has_more": false,
            "url": "/v1/charges?payment_intent=pi_3KyV7zSC9liGGbLo1px7Ygcp"
          },
          "client_secret": "pi_3KyV7zSC9liGGbLo1px7Ygcp_secret_qS079xjht98K6nn5cq7qhwSbJ",
          "confirmation_method": "automatic",
          "created": 1524505326,
          "currency": "usd",
          "customer": null,
          "description": "One blue fish",
          "invoice": null,
          "last_payment_error": null,
          "livemode": false,
          "metadata": {},
          "next_action": null,
          "on_behalf_of": null,
          "payment_method": "pm_1EXUPv2eZvKYlo2CUkqZASBe",
          "payment_method_options": {},
          "payment_method_types": [
            "card"
          ],
          "processing": null,
          "receipt_email": null,
          "redaction": null,
          "review": null,
          "setup_future_usage": null,
          "shipping": null,
          "statement_descriptor": null,
          "statement_descriptor_suffix": null,
          "status": "succeeded",
          "transfer_data": null,
          "transfer_group": null
    }
```

 APIs for a refund for the created intent  
```js
   • POST http://localhost:5000/api/v1/create_refund/put_the_payment_intent_id_here
      
```
