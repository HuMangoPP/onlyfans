const express = require('express');
const { Model } = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');

/** GET */
// posts
router.get('/all', async (req, res) => {
    Post.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
    });
});

// posts/:id 
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
    res.status(200);
});

/** POST */
// posts
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        await post.save()
        res.json(post);
        res.status(200);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
});

/** PUT */
// posts
router.put('/:id', async (req, res) => {
    const updatedPost = {
        title: req.body.title,
        description: req.body.description
    };
    try {
        await Post.findByIdAndUpdate(req.params.id, updatedPost);
        res.json(updatedPost);
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
});

/** DELETE */
// posts
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id);
        res.json(post);
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;