const { application } = require("express")
const validator = require("fastest-validator")
const models = require("../models")



function save(req, res, next)
{
    
    const post =
    {
        title: req.body.title,
        content: req.body.content,
        imageurl: req.body.imageurl,
        category: req.body.category,
        userid: req.body.userid
    }
    // define validation schema
    const schema ={
        title: {type: "string", optional: false, max: 100},
        content: {type: "string", optional: false, max: 500},
        userid : {type: "string", optional: false,}
    }

    const v = new validator()
    const validationResponse = v.validate(post, schema) //check(validate)
    
    // set validation error response
    if(validationResponse !== true){
        return res.status(400).json({
            message: "validation Failed",
            errors: validationResponse
        })
    }
    //models.categories.findByPk(req.body.category).then(result => {
        //if(result !== null){
            models.post.create(post).then(result =>{
                res.status(201).json({
                     message: "post created successfully",
                     post: result
            })
            }).catch(err =>{
                res.status(500).json({
                message: "something went wront",
                err: err
                })
            })  
        // }else{
        //     res.status(400).json({
        //         message: "Invalid category",
        //         })
        // }
   // })
}

function show(req, res)
{
    const id = req.params.id

    models.post.findByPk(id).then(result =>{
        res.status(200).json( result )
    }).catch(err =>{
        res.status(500).json({
            message: "something went wrong"
        })
    })
}

function index(req, res){
    models.post.findAll().then(result =>{
        res.status(200).json(result)
    }).catch(err => {
        res.status(500).json({
        message: "somethong went wrong!",
        })
    })
}

function update(req, res){
    const id = req.params.id
    const updatepost = {
        title: req.body.title,
        content: req.body.content,
        imageurl: req.body.imageurl,
        category: req.body.category,
        userid: req.body.userid
    }

    const schema ={
        title: {type: "string", optional: false, max: 100},
        content: {type: "string", optional: false, max: 500},
        userid : {type: "string", optional: false,}
    }

    const v = new validator()
    const validationResponse = v.validate(updatepost, schema)
    
    // set validation error response
    if(validationResponse !== true){
        return res.status(400).json({
            message: "validation Failed",
            errors: validationResponse
        })

    }
    models.post.update(updatepost, {where: {id:id}}).then(result =>{
        res.status(200).json({
            message: "post updated successfully!",
            post: updatepost
        })
    }).catch(err =>{
        res.status(200).json({
            message: "something went wrong!",
            err: err
        })
    })
}


function destroy(req, res){
    const id = req.params.id

    models.post.destroy({where: {id:id}}).then(result =>{
        res.status(200).json({
            message: "post deleted successfully!",
        })
    }).catch(err =>{
        res.status(200).json({
            message: "something went wrong!",
            err: err
        })
    })
}


module.exports ={
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}










// function index(req, res)
// {
//     const post = "check post list"
//     res.send(post)
// }