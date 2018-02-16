var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "review"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM WeightTable', (err, results, fields)=> {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(Height, Name, cb) {
  con.query('INSERT INTO groceries (description, quantity) VALUES (?, ?)',
    [Height, Name], (err, results, fields) => {
      if(err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
