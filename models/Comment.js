const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    }
}); 

module.exports = mongoose.model('Comments',CommentSchema);