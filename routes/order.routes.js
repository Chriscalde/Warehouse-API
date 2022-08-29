const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');

router.post('/create', controller.createItem);
router.get('/get/:id', controller.getJobOrder);
router.get('/all', controller.getAllOrders);

module.exports = router;