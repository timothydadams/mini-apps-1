var express = require('express');
var db = require('./database-mysql-pure.js');

var app = express();

app.use(express.static('public'));


//api endpoint to submit form data
app.put('/api/checkout', (req, res) => {
  //get name, email, pw from req and create new order in DB
  db.create(name, email, pw, (err, data) => {
    if (err) {
      console.log(data);
      res.sendStatus(500);
    }
    res.send(data);
  });
});







var port = 8000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
});