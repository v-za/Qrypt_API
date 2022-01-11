const request = require('request');
// place access token here
const headers = {'Authorization': `Bearer PLACE_ACCESS_TOKEN_HERE`}
request('https://api-eus.qrypt.com/api/v1/quantum-entropy', {json : true, headers}, (err, res, body) => {
    if (err) { return console.log(err); }
    // response body with array of random
    console.log(body); 
})