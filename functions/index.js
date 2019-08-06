// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

const {Storage} = require("@google-cloud/storage");

const gcconfig = {
  projectId: "store-a-byte",
  keyFilename: "firebase.json"
};

const gcs = new Storage(gcconfig);

/*exports.fileUploaded = functions.storage.object().onFinalize(event => {

  const object = event.data; // the object that was just uploaded
  const bucket = gcs.bucket(object.bucket);
  const signedUrlConfig = { action: 'read', expires: '03-17-2025' }; // this is a signed url configuration object

  var fileURLs = []; // array to hold all file urls 

  // this is just for the sake of this example. Ideally you should get the path from the object that is uploaded :)
  const folderPath = "a/path/you/want/its/folder/size/calculated";

  bucket.getFiles({ prefix: folderPath }, function(err, files) {
    // files = array of file objects
    // not the contents of these files, we're not downloading the files. 

    files.forEach(function(file) {
      file.getSignedUrl(signedUrlConfig, function(err, fileURL) {
        console.log(fileURL);
        fileURLs.push(fileURL);
      });
    });

  });

});*/