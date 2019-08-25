const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});
