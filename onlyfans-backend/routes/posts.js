const express = require('express')
const router = express.Router()
const {getAllPosts, getPost, createPost, updatePost, deletePost, getPostComments, createComment} = require('../controllers/posts')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./images/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
}) 

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
        cb(null, true)
    } else {
        cb(null, false)
    }
};

const upload = multer({
    storage: storage,
    fileFilter,
})


/** GET */
// posts
router.get('/', async (req, res) => {
    return getAllPosts(req, res)
});

// posts/:id 
router.get('/:id', async (req, res) => {
    return getPost(req, res)
});

router.get('/:id/comments', async (req, res) => {
    return getPostComments(req, res)
})

/** POST */
// posts
router.post('/', upload.single("image"), async (req, res) => {
    return createPost(req, res)
});

router.post('/:id', async(req, res) => {
    return createComment(req, res)
})

/** PATCH */
// posts
router.patch('/:id', async (req, res) => {   
    return updatePost(req, res)
});

/** DELETE */
// posts
router.delete('/:id', async (req, res) => {
    return deletePost(req, res)
});

module.exports = router;