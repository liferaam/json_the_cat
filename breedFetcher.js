const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds";
// calling that url

request(url, (err, res, body) => {
  // err = error, res = resourse, body = body
  if (err){
    console.log("Retry")
    return
  }
  if (! body) {
    console.log("breed is not available")
  }
  const data = JSON.parse(body);
  // return all url(strings) into object
  console.log(data);
  console.log(typeof data);
  // type of data = object because of JSON.parse
}) 
