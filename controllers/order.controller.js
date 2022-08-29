const Order = require('../models/order.model');

exports.createItem = async(req, res) => {
    const jobId = req.body.jobId
    const type = req.body.type
    const code = req.body.code
    const item = req.body.item
    const location = req.body.location
    const description = req.body.description
    const date = req.body.date
    const status = req.body.status

    const newItem = new Order({
        jobId,
        type,
        code,
        item,
        location,
        description,
        date,
        status
    });

    newItem.save(async(err, savedItem) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: savedItem
            });
        }
    })
}
exports.getAllOrders = (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: orders
            })
        }
    })
}
exports.getJobOrder = (req, res) => {
    const jobId = req.params.id;

    Order.find({ jobId }, (err, order) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: order
            })
        }
    })
}