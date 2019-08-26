const express = require('express');
const sequelize = require('./models').sequelize;
const app = express();
const routes = require('./routes');
const cors = require('cors');

app.use(express.json());
sequelize.sync();
app.use(cors());

app.use('/', routes);

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});
