const bcrypt = require('../helpers/bcrypt');
const User = require('../models/user.model');

exports.createUser = async(req, res) => {
    const username = req.body.username
    const name = req.body.name
    const mail = req.body.mail
    const phone = req.body.phone
    const password = req.body.password

    let encryptedPassword = ''
    password ? encryptedPassword = await bcrypt.hashPassword(password) : null

    const newUser = new User({
        username,
        name,
        mail,
        phone,
        password: encryptedPassword
    });

    newUser.save(async(err, savedUser) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: savedUser
            })
        }
    })
}
exports.getUsers = async(req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json({
                success: true,
                data: users
            })
        }
    })
}