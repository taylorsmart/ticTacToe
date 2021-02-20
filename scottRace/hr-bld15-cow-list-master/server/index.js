const express = require('express');
const path = require('path');
const queries = require('../database/index.js')
const PORT = 3000;
const app = express();
const cors = require('cors');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(cors())

app.get('/cows', (req, res) => {
  queries.fetchCows((err,response) => {
    if (err) {
      console.log('Error fetching cows');
      res.status(404).send('Error Fetching Cows');
    } else {
      res.status(200).send(response);
    }
  })
})

app.get('/cow/:id', (req, res) => {
  let id = req.body.id
  queries.fetchCow()
})

app.post('/cows', (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  console.log(name, description)
  queries.insertCow(name, description, (err, response) => {
    if (err){
      res.status(500).send('error adding cow')
    } else {

      res.status(201).send(response)
    }
  })
})

app.put('/cows/:id', (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let description = req.body.description;
  console.log(name, description)
  queries.editCow(id, name, description, (err, response) => {
    if (err){
      res.status(500).send('error editing cow')
    } else {

      res.status(201).send(response)
    }
  })
})
app.delete('/cows/:id', (req, res) => {
  let id = req.params.id
  queries.deleteCow(id, (err, response) => {
    if (err){
      res.status(500).send('error adding cow')
    } else {

      res.status(201).send(response)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
