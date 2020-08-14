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
    TWILIO_AUTHTOKEN: "{AUTH_TOKEN}",
    NEXMO_APIKEY: "{APIKEY}",
    NEXMO_APISECRET: "{APISECRET}",
    NEXMO_APPLICATIONID: "{APPLICATIONID}",
    MAILTRAP_USER: "{MAILTRAP_USER}",
    MAILTRAP_PASS: "{MAILTRAP_PASS}",
};
```

It's serving http://localhost:3333

You can use postman with the following endpoints:

### Twilio

#### Call
- (POST) http://localhost:3333/call
```json
{
	"url": "http://demo.twilio.com/docs/voice.xml",
	"from": "{TwilioValidNumber}", 
	"to": [{
		"type": "phone", 
		"number": "{MSISNDFormat}"
	}]
}
```

#### Message
- (POST) http://localhost:3333/message
```json
{
	"from": "{TwilioValidNumber}",
	"to": [{
		"type": "phone", 
		"number": "{MSISNDFormat}"
	}],
	"body": "Hello from twilio solidapirest"
}
```

### Nexmo

#### Call
- (POST) http://localhost:3333/call
```json
{
	"to": [{ "type": "phone", "number": "{MSISNDFormat}" }],
	"from": { "type": "phone", "number": "{MSISNDFormat}" },
	"ncco": {
		"action": "talk",
		"voiceName": "Joey",
    		"text": "This is a text-to-speech test message."
	}
}
```

#### Message
- (POST) http://localhost:3333/message
```json
{
	"from": "{TwilioValidNumber}",
	"to": [{
		"type": "phone", 
		"number": "{MSISNDFormat}"
	}],
	"body": "Hello from twilio solidapirest"
}
```

### CRUD

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
