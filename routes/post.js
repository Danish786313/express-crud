const express = require("express")
const router = express.Router()
const postcontroller = require("../controller/postcontroller")
const checkauthmiddleware = require("../middleware/check-auth")

router.post('/post', /*checkauthmiddleware.checkauth,*/ postcontroller.save)

router.get('/post/show', postcontroller.index)

router.get('/post/:id', postcontroller.show)

router.patch('/post/update/:id', checkauthmiddleware.checkauth, postcontroller.update)

router.delete('/post/:id', checkauthmiddleware.checkauth, postcontroller.destroy)

module.exports = router