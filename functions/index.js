// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const projectId = 'store-a-byte'
let gcs = new Storage ({
  projectId
});
/* I tried to create an image resizer, it works but it wont be able to do exactly what I want.
const os = require('os')
const path = require('path')
const spawn = require('child-process-promise').spawn // Used to resize file

exports.onFileChange = functions.storage.object().onFinalize(event => {

  const object = event
  const bucket = object.bucket
  const contentType = object.contentType
  const filePath = object.name
  console.log("Running resize funciton")

  if (object.resourseState === 'not_exists') { //Checks if the file exists
    console.log('File doesnt exist')
    return;
  }

  if (path.basename(filePath).startsWith('resized-')) { // Prevents an infinite loop
    console.log('Already resized file')
    return;
  }

  const destBucket = gcs.bucket(bucket)
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath)) // Gets profile image and path for file
  console.log(tmpFilePath)
  const metadata = { contentType: contentType }
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    return spawn('convert', [tmpFilePath, '-resize', '120x120', tmpFilePath])
  }).then(() => {
    console.log("Resize finished")
    return destBucket.upload(tmpFilePath, {
      destination: 'ProfilePictures/' + 'resized-' + path.basename(filePath),
      metadata: metadata
    })
  })
}); */

const gcconfig = {
  projectId: "store-a-byte",
  keyFilename: "firebase.json"
};

//const gcs = new Storage(gcconfig);

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