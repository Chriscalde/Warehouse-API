const Job = require('../models/job.model');

exports.createJob = async(req, res) => {
    const jobNumber = req.body.jobNumber
    const client = req.body.client
    const status = req.body.status

    const newJob = new Job({
        jobNumber,
        client,
        status
    });

    newJob.save(async(err, savedJob) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({
                success: true,
                data: savedJob
            })
        }
    })
}

exports.changeStatus = async(req, res) => {
    const jobId = req.params.id
    const status = req.body.status
    Job.findByIdAndUpdate(jobId, { status: status }, (err, job) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({
                success: true,
                data: job
            })
        }
    })
}
exports.addPurchaseOrder = async(req, res) => {
    const jobId = req.params.id
    const purchaseOrders = req.body.purchaseOrders
    Job.findByIdAndUpdate(jobId, { purchaseOrders: purchaseOrders }, (err, job) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: job
            })
        }
    })
}
exports.addJobDetails = async(req, res) => {
    const jobId = req.params.id
    const jobDetails = req.body.jobDetails
    Job.findByIdAndUpdate(jobId, { jobDetails: jobDetails }, (err, job) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: job
            })
        }
    })
}
exports.getAll = (req, res) => {
    Job.find({}, (err, jobs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({
                success: true,
                data: jobs
            })
        }
    })
}

exports.getJob = (req, res) => {
    const jobId = req.params.id

    Job.findById(jobId, (err, job) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({
                success: true,
                data: job
            })
        }
    })
}

exports.getFirstJob = (req, res) => {
    Job.findOne({}, (err, job) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({
                success: true,
                data: job
            })
        }
    })
}

exports.createJobTemplate = (req,res) => {
    const jobNumber = req.body.jobNumber
    const client = req.body.client
    const status = req.body.status
    const jobDetails = req.body.jobDetails
    const purchaseOrders = req.body.purchaseOrders

    const newJob = new Job({
        jobNumber,
        client,
        status,
        jobDetails,
        purchaseOrders
    });

    newJob.save(async(err,job)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).json({
                success: true,
                data: job
            });
        }
    });
}