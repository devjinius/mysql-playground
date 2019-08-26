const express = require('express');
const uuid = require('uuid/v4');
const models = require('../models/index');

const router = express.Router();

router.get('/carts', function(req, res) {
  models.cart.findAll().then(carts => {
    res.status(200).json(carts);
  });
});

router.post('/cart', function(req, res) {
  models.cart
    .create(req.body)
    .then(cart => res.status(201).json(cart))
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true
      });
    });
});

router.delete('/cart/:id', function(req, res) {
  models.cart
    .destroy({ where: { id: req.params.id } })
    .then(cart => res.status(200).json(cart))
    .catch(err => {
      console.log(`에러가 발생했습니다. ${err.message}`);
      res.json({
        error: true
      });
    });
});

router.patch('/cart/:id', async (req, res) => {
  try {
    const status = await models.cart.update(req.body, { where: { id: req.params.id } });
    if (!status) throw 'Error while Updating';
    const cart = await models.cart.findByPk(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    console.log(`에러가 발생했습니다. ${error.message}`);
    res.json({
      error: true
    });
  }
});

module.exports = router;
