const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    }
}); 

module.exports = mongoose.model('Comment', CommentSchema);