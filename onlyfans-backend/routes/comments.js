const express = require('express')
const { updateComment, deleteComment } = require('../controllers/comments')
const router = express.Router()

/** PATCH */
router.patch('/:id', async (req, res) => {
    return updateComment(req, res)
})

/** DELETE */
router.delete('/:id', async (req, res) => {
    return deleteComment(req, res)
})

module.exports = router