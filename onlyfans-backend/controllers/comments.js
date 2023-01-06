const Comment = require('../models/Comment')
const asyncWrapper = require('../middlewares/async')

/** PATCH */
const updateComment = asyncWrapper(async (req, res) => {
    const commentId = req.params.id
    const comment = await Comment.findOneAndUpdate({__id:commentId}, req.body, {
        runValidators: true,
        new: true,
    })
    res.status(200).json(comment)
})

/** DELETE */
const deleteComment = asyncWrapper(async (req, res) => {
    const commentId = req.params.id
    const comment = await Comment.findOneAndRemove({__id:commentId})
    res.status(200).json(comment)
})

module.exports = {updateComment, deleteComment}