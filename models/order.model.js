const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: false
    },
    item: {
        type: String,
        required: true
    },
    purchaseOrder: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);