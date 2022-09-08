const express = require('express');
const router = express.Router();
const controller = require('../controllers/job.controller');

router.post('/create', controller.createJob);
router.put('/update/:id', controller.changeStatus);
router.put('/details/:id', controller.addJobDetails);
router.put('/orders/:id', controller.addPurchaseOrder);
router.get('/all', controller.getAll);
router.get('/get/:id', controller.getJob);
router.get('/first', controller.getFirstJob);

module.exports = router;