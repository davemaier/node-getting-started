const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Get me started!!');
})

app.listen(3000, function () {
  console.log('Get me started!');
})
