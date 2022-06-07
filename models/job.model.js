const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    jobNumber: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    client: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'No Items'
    }
});

module.exports = mongoose.model('job', jobSchema);