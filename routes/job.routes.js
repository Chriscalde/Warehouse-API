const express = require('express');
const router = express.Router();
const controller = require('../controllers/job.controller');

router.post('/create', controller.createJob);
router.put('/update', controller.changeStatus);
router.get('/all', controller.getAll);
router.get('/:id', controller.getJob);

module.exports = router;