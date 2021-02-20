const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'FARM5'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

const fetchCows =function (cb) {
  connection.query('SELECT * from cows', (err,cowList) =>{
    if(err) {
      console.log(err)
    } else {
      cb(cowList)
    }
  })
}

const insertCow =function (name, description, cb) {
  connection.query(`insert cows columns (name,description) values ('${name}','${description}')`, (err,cowList) =>{
    if(err) {
      console.log(err)
    } else {
      console.log('COW INSERTED')
    }
  })
}





// Don't forget to export your functions!
module.exports = {

};
