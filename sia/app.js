const sia = require('sia.js');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



// connect to an already running Sia daemon on localhost:9980 and print its version
sia.connect('localhost:9980')
  .then((siad) => {
    //log running daemon version
    siad.call('/daemon/version').then((version) => console.log(version));
    try {  
      //check status of blockchain
      const consensus = siad.call('/consensus').then((result) => {
        try {
          try {  
            const wallet = siad.call({
              url: '/wallet/init/seed',
              method: 'POST',
              qs: {
                 seed: "algebra lids irate ozone kangaroo island voice puddle ladder suffice koala among teardrop loyal mugged alchemy utmost unrest soggy tequila amply vector phrases gyrate aerial language wept dual adult",
              }
            })
            .then(() => { 

            })
            .catch((e) => { console.error(e) });
          } catch (e) { console.error(e); }
          
          //THIS IS VERY BAD BUT JUST FOR DEV PURPOSES
          //THE API PASS KEY SHOULD NOT BE PLACED HERE DIRECTLY BUT READ FROM A SECURE DATABASE
          siad.call({
            url: '/wallet/unlock',
            method: 'POST',
            qs: {
              encryptionpassword: "algebra lids irate ozone kangaroo island voice puddle ladder suffice koala among teardrop loyal mugged alchemy utmost unrest soggy tequila amply vector phrases gyrate aerial language wept dual adult",
            }
          }).then(() => {
            console.log('seems to have worked');
          }).catch((e) => { console.error(e)});
          
        } catch (e) {
          console.error(`Wallet Initilization Error: ${e}`);
        }

        //check that the blockchain has fully downloaded
        if(result.synced) {
          
        } 
      });

      
      // do something with result consensus
    } catch (e) {
      console.log("Consensus POST Error: " + e)
    }
  })
  .catch((err) => {
    console.error("Couldn't Connect to the Sia daemon: "+ err);
  });


