const express = require("express")
const router = express.Router()

const controllerPost = require('../controller/post');

router.get('/', controllerPost.getAllPosts);
router.get('/getid/:id', controllerPost.getPostById);
router.post('/', controllerPost.addPost);
router.put('/', controllerPost.updatePost);
router.delete('/', controllerPost.getAllPosts);



module.exports = router