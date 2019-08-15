// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const escapeHtml = require('escape-html');
const admin = require('firebase-admin');
const express = require('express')

// Listen for changes in all documents in the 'users' collection
exports.dbChanges = functions.database.ref('/users/{userid}/')
  .onWrite((dataSnapshot, context) => {
    if (context.authType === 'ADMIN') {
      console.log('admin');
    } else if (context.authType === 'USER') {
      console.log(dataSnapshot.val(), 'written by', context.auth.uid);
    }
  });



exports.helloHttp = functions.https.onRequest((req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).send('Hello World!');
      break;
    case 'PUT':
      res.status(403).send('Forbidden!');
      break;
    case 'POST':
      res.status(200).send(req.query.test);
    default:
      res.status(405).send({error: 'Something blew up!'});
      break;
  }
});

exports.helloContent = functions.https.onRequest((req, res) => {
  let name;

  switch (req.get('content-type')) {
    // '{"name":"John"}'
    case 'application/json':
      name = req.body.name;
      break;

    // 'John', stored in a Buffer
    case 'application/octet-stream':
      name = req.body.toString(); // Convert buffer to a string
      break;

    // 'John'
    case 'text/plain':
      name = req.body;
      break;

    // 'name=John' in the body of a POST request (not the URL)
    case 'application/x-www-form-urlencoded':
      name = req.body.name;
      break;
  }

  res.status(200).send(`Hello ${escapeHtml(name || 'World')}!`);
});

/*const {Storage} = require("@google-cloud/storage");

const gcconfig = {
  projectId: "store-a-byte",
  keyFilename: "firebase.json"
};

const gcs = new Storage(gcconfig);*/