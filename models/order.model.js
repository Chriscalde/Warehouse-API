const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    item: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('order', orderSchema);