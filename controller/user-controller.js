const { users } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

function signup(req, res) {
    users.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(200).json({
                message: 'User already exists',
            })
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    const data = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }
                    users.create(data).then(result => {
                        res.status(200).json({
                            message: 'User created successfully',
                            result: result
                        }).catch(err => {
                            res.status(200).json({
                                message: 'User created successfully',
                                result: err
                            });
                        });
                    }).catch(err => {
                        res.status(500).json({
                            message: 'Something went wrong',
                            err: err
                        })
                    })
                })
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Something went wrong',
            err: err
        })
    })
}



function login(req, res) {
    users.findOne(req.body, { where: { email: req.body.email } }).then(result => {
        if (!result) {
            res.status(401).json({
                message: "Invalid credential 1"
            })
            //return result
        } else {
            bcrypt.compare(req.body.password, users.password, (err, result) => {
                if (!result) {
                    const token = jwt.sign({
                        name: users.name,
                        email: users.email,
                        password: users.password,
                    }, 'secret', (err, token) => {
                        res.status(200).json({
                            message: "Authentication Succesfull",
                            token: token
                        })
                    })
                } else {
                    res.status(401).json({
                        message: "Invalid credential 2"
                    })
                }
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Something went wrong",
            err: err
        })
    })
}


module.exports = {
    signup: signup,
    login: login
}