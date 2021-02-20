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
      cb(err, null)
    } else {
      console.log(cowList)
      cb(null,cowList)
    }
  })
}


const deleteCow =function (id, cb) {
  connection.query(`delete from cows where id='${id}'`, (err,cowList) =>{
    if(err) {
      console.log(err)
      cb(err, null)
    } else {
      console.log(cowList)
      cb(null,cowList)
    }
  })
}

const insertCow =function (name, description, cb) {
  connection.query(`insert  cows (name,description) values ('${name}','${description}')`, (err,success) =>{
    if(err) {
      console.log(err)
    } else {
      console.log('COW Deleted')
    }
  })
}

const editCow =function (id, name, description, cb) {
  connection.query(`update cows set name='${name}', description='${description}' where id='${id}'`, (err,success) =>{
    if(err) {
      console.log(err)
    } else {
      console.log('COW edited')
    }
  })
}



// Don't forget to export your functions!
module.exports = {
  fetchCows,
  insertCow,
  deleteCow,
  editCow

};
