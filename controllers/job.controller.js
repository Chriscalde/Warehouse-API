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
    const jobId = req.body.jobId
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