const express = require('express');
const uuid = require('uuid/v4');

const router = express.Router();

router.get('/carts', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const data = JSON.stringify([
    {
      id: uuid(),
      name: 'test',
      price: 10,
      quantity: 10
    },
    {
      id: uuid(),
      name: 'test2',
      price: 100,
      quantity: 4
    }
  ]);
  res.send(data);
});

module.exports = router;
