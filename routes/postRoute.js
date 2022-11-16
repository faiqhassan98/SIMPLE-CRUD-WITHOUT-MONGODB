const express = require("express")
const router = express.Router()

const controllerPost = require('../controller/post');

router.get('/', controllerPost.getAllPosts);
router.get('/getid/:id', controllerPost.getPostById);
router.post('/', controllerPost.addPost);
router.put('/update/:id', controllerPost.updatePost);
router.delete('/del/:id', controllerPost.DeletePost);



module.exports = router