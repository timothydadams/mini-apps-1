var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  database: 'orders'
});

connection.connect((err) => {
  if (err) {
    console.log('FAILED TO CONNECT', err);
    return;
  }
  console.log('SUCCESSFULLY CONNECTED TO DB');
});



//functions to export for server usage in api endpoints
let createOrder = (name, email, password, cb) => {
  console.log('need to build create query');
  var params = [name, email, password];
  connection.query(`INSERT INTO customerInfo (name, email, password) VALUES(?, ?, ?)`, params, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

let updateAddress = (userID, PARAMS, cb) => {
  console.log('need to build create query');
  var params = [];
  connection.query(query, params, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(results);
  })
};

module.exports.create = createOrder;
module.exports.update = update;
