const https = require("node:https");

function httpsGetRequest(url, cb, options = null) {
  return https.get(url, (res) => {
    let data = ''
     
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    // Ending the response 
    res.on('end', () => {
        let result = JSON.parse(data).message;

        cb(result, options);
    });
       
  }).on("error", (err) => {
      console.log("Error: ", err)
  }).end()
}

module.exports = {
  httpsGetRequest
}