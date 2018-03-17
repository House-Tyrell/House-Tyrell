const express = require('express');
const axios = require('axios');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/models.js');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//* **************************** POST REQUESTS *********************************
app.post('/test', (req, res) => {
  db.Category.create({ category_name: 'Test2Test' })
    .then(() => {
      res.send('success');
    });
});

//* **************************** GET REQUESTS *********************************
app.get('/fetch/items', (req, res) => {
  db.Item.findAll()
    .then((data) => {
      res.send(data);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});