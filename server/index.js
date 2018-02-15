var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));




app.get('/', (req, res ) => res.send('Hello World'));




app.listen(3000, function (){
  console.log('server started an listening on port 3000');
})
