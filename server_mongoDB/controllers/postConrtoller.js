const Post = require("../models/Post")
const mongoose = require("mongoose")
const path = require('path');

exports.findAll = async (req, res) => {
    try{
        const posts = await Post.find({});
        res.status(200).json({
            count: posts.length,
            posts: posts
        });
    }
    catch(err){
        console.log(err);
    }
    
}

exports.findOne = async function (req, res) {
    try{
        const post = await Post.findById(req.params.id);
        if (post){
            res.status(200).json(post);
        }
        else{
            res.status(404).json({message: 'Post not found'})
        } 
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.create = async function (req, res) {

    const post = new Post({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        brief: req.body.brief,
        postBody: req.body.postBody,
        author: req.body.author
    })
    
    try{
        const newPost = await post.save();
        res.status(201).json({
            message: 'Post was created',
            create_post: newPost
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.update = async function (req, res) {
    const updatedPost = {};

    for (const [key, value] of Object.entries(req.body)) {
        if (req.body[key] && (key === 'title' || key === 'brief' || key === 'postBody')){
            updatedPost[key] = req.body[key]
            updatedPost[updateDate] = Date.now
        }
        else if(key !== 'title' || key !== 'brief' || key !== 'postBody'){
            return res.status(500).json({error: 'Fields are invalid to be updated'})
        }
    }

    try{
        await Post.updateOne({_id: req.params.id} ,{$set: updatedPost});
        res.status(201).json({
            message: 'Post was updated',
            postId: req.params.id
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    }
}

exports.delete = async function (req, res) {
    try{
        const result = await Post.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: 'Post was deleted',
            postId: req.params.id
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: err})
    } 
}

exports.createComment = async function (req, res) {
    const comment = new Comment({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        commentBody: req.body.commentBody,
        userId: req.body.author
    })
    
    // try{
    //     await post.push();
    //     res.status(201).json({
    //         message: 'Post was created',
    //         create_post: newPost
    //     })
    // }
    // catch(err){
    //     console.log(err)
    //     res.status(500).json({error: err})
    // } 
}

// exports.index = async function (req, res) {

// }

