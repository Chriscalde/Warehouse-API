const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');

router.post('/create', controller.createItem);

module.exports = router;