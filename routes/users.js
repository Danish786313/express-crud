const express = require("express")
const router = express.Router()

const usercontroller = require("../controller/user-controller")
const mid = require("../middleware/check-auth");

router.post("/sign-up", usercontroller.signup)

router.post('/login',  usercontroller.login)

module.exports = router