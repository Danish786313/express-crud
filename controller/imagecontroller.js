function upload(req, res){
    if(req.file.filename){
        res.status(200).send({
            message: 'Image uploaded successfully',
            url: req.file.filename
        })
    }else{
        res.status(404).send({
            message: 'upload cannot be uploaded successfully',
        })
    }
}

module.exports ={
    upload: upload
}