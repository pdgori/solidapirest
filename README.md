# Restful API with NODE JS using SOLID Principles 

MailTrap and Twilio Implemented.

**Twilio sending SMS and CALLs.

- http://mailtrap.io/
- https://www.twilio.com/


## How to setup

* npm install
* npm run start


## How to test
Create a new file named keys_dev.js inside the config folder as below.

//keys_dev.js
```js
module.exports = {
    TWILIO_ACCOUNTSID: "{ACCOUNT_SID}",
    TWILIO_AUTHTOKEN: "{AUTH_TOKEN",
    MAILTRAP_USER: "{MAILTRAP_USER}",
    MAILTRAP_PASS: "{MAILTRAP_PASS}",
};
```

It's serving http://localhost:3333

You can use postman with the following endpoints:

- (POST) http://localhost:3333/call
```json
{
	"url": "http://demo.twilio.com/docs/voice.xml",
	"from": "{TwilioValidNumber}", 
	"to": "{MSISNDFormat}" 
}
```

- (POST) http://localhost:3333/message
```json
{
	"from": "{TwilioValidNumber}",
	"to": "{MSISNDFormat}" ,
	"body": "Hello from twilio solidapirest"
}
```

- (POST) http://localhost:3333/users
```json
{
	"name": "Jhon Doe",
	"email": "jhondoe@tejow.com",
	"password": "123456"
}
```

- (POST) http://localhost:3333/users
```json
{
	"name": "Jhon Doe",
	"email": "jhondoe@tejow.com",
	"password": "123456"
}
```

- (GET) http://localhost:3333/users

- (PUT) http://localhost:3333/users/:USERID
```json
{
	"name": "Jhon Doe 2",
	"email": "jhondoe@tejow.com",
	"password": "12345"
}
```
