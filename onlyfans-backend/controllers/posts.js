const Post = require('../models/Post')
const Comment = require('../models/Comment')
const asyncWrapper = require('../middlewares/async')

/** GET all */
const getAllPosts = asyncWrapper(async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json({posts})
})

/** POST */
const createPost = asyncWrapper(async (req, res) => {
    req.body.image = req.file.path
    const post = await Post.create(req.body)
    res.status(201).json({post})
})

const createComment = asyncWrapper(async (req, res) => {
    const postId = req.params.id
    req.body.postId = postId
    const comment = await Comment.create(req.body)
    res.status(201).json({comment})
})

/** GET id */
const getPost = asyncWrapper(async (req, res) => {
    const postId = req.params.id
    const post = await Post.findOne({_id:postId})
        
    if (!post) {
        return res.status(404).json({msg: `no task with id ${postId}`})
    }
    res.status(200).json({post})
})

const getPostComments = asyncWrapper(async (req, res) => {
    const postId = req.params.id
    const comments = await Comment.find({postId}).exec()

    if (!comments) {
        return res.status(404).json({msg: `no comments associated with post id ${postId}`})
    }

    res.status(200).json({comments})
})

/** PATCH */
const updatePost = asyncWrapper(async (req, res) => {
    const postId = req.params.id
    const post = await Post.findOneAndUpdate({__id:postId}, req.body, {
        runValidators: true,
        new: true,
    });
    res.status(200).json(post)
})

/** DELETE */
const deletePost = asyncWrapper(async (req, res) => {
    const postId = req.params.id
    const post = await Post.findOneAndRemove({__id:postId});
    const comments = await Comment.deleteMany({postId})
    res.status(200).json({post, comments})
})


module.exports = {getAllPosts, createPost, createComment, getPost, updatePost, deletePost, getPostComments}