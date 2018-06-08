'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// First intent displayed to the user
app.intent('Default Welcome Intent', (conv) => {
  conv.close('Hello sir, this is your grocery-bot');
});

// Used by firebase. Specifies the function to be uploaded to is
// dialogflowFirebaseFulfillment
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

