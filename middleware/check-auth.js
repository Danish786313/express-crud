const jwt = require("jsonwebtoken")

function checkauth(req, res, next){
    try{
        const token = req.headers.authorization.splite(" ")[1]
        console.log(req.headers.authorization)
        const decodedToken = jwt.verify(token, 'secret')
        req.userData = decodedToken
        next()
    }catch(e){
        return res.status(401).json({
            "message": "Invalid or expire token provided",
            "error": e
        })
    }
}

module.exports = {
    checkauth: checkauth
}