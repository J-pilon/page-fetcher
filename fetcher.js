const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);

request(arg[0], function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  if (error !== null || response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    process.exit();
  }

  fs.writeFile(arg[1], body, function() {
    const size = fs.statSync(arg[1]);
    console.log(`Downloaded and saved ${size.size} bytes to ${arg[1]}`);
  });
});


