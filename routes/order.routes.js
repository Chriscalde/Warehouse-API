const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');

router.post('/create', controller.createItem);
router.get('/get/job', controller.getJobOrder);

module.exports = router;