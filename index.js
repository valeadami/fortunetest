'use strict';


var  express = require('express');
var  bodyParser = require('body-parser');
var  http = require('http');

var  app = express();
var server = http.createServer(app);
/* per gestire post url via method post */
app.use(bodyParser.urlencoded({ extended: false }));
/**/
app.use(bodyParser.json());
/** */
app.use(express.static(__dirname));
/*** */
var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log("Server is up and running...");
});

app.get('/', (req, res) => {
  res.send({
    errorMessage: 'Sono nella root'
  });
});

app.get('/about', (req, res) => {
  res.send({
    errorMessage: 'Sono nel about'
  });
});
app.post('/pippo', (req, res) => {
  /*res.send({
    errorMessage: 'Sono nel fortune'
  });*/
  console.log("sono nel post");
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write("ciao dal nome " + req.body.firstname);
  
  res.end();
  });
