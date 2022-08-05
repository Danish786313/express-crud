const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/create', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/createuser.html'))
    // create path pending
})

router.get('/showall', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/showallusers.html'))
    // create path pending
})

router.get('/showspecifice', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/showspecificuser.html'))
    // create path pending
})

router.get('/update', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/updateuser.html'))
    // create path pending
})

router.get('/remove', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views/remove.html'))
    // create path pending
})

module.exports = router