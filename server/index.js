var express = require('express');
var data = require('../database/index.js')
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));




app.get('/showme', (req, res ) => res.send('Hello World'));







app.post('/showme',function(req,res){

let height = req.body.height;
let name = req.body.name;

if(!name) {
  res.sendStatus(400);
}else {
  database.insertOne(height, name,(err, res)=>{
    if(err) {
      res.sendStatus(500);
    } else{
      res.sendStatus(200).json(results);
    }
  });
}

})

app.listen(3000, function (){
  console.log('server started an listening on port 3000');
})
