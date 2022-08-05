const express = require("express")
const imagecontroller = require("../controller/imagecontroller")
const imageuploader = require("../helpers/image-uploader")
const checkauth = require("../middleware/check-auth")

const router = express.Router()

router.post('/upload', /*checkauth.checkauth,*/ imageuploader.upload.single('image'), imagecontroller.upload)

module.exports = router