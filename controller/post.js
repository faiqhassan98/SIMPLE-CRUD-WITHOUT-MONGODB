const posts = [{ id: 1, title: "faiq" }, { id: 2, title: "HASSAN" }]

function getAllPosts(req, res) {
    res.send({ msg: "get all posts", post: posts });
}

function getPostById(req, res) {
    // res.send({ msg: "get post by id", post: posts });
    console.log("get json by id", req.params.id);
    const abc = req.params.id;
    res.send(posts.find(post => post.id == abc));
}

function addPost(req, res) {
    const newData = req.body
    posts.push(newData);
    res.send({ post: posts });
}

function updatePost(req, res) {
    console.log("get json by id", req.params.id);
    const upd = req.params.id;
    const data = posts.find(post => post.id == upd)
    if (data) {
        const updId = posts.findIndex(post => post.id == upd);
        posts[updId].title = req.body.title
        res.send(posts[updId]);
    } else {
        res.status(404).send('Status: Not Found')
    }

}


function DeletePost(req, res) {
    console.log("delete json by id", req.params.id);
    const delD = req.params.id;
    const delData = posts.find(post => post.id == delD);

    if (delData) {
        const updId = posts.findIndex(post => post.id == delD);
        delete(posts[updId].title);
        res.send(posts[updId]);
    } else {
        res.send("Id not found")
    }
}
// function getAllPosts(req, res) {
//     const addData = req.body
//     const posts = [{ title: "faiq" }, { title: "HASSAN" }, req.body]
//     res.send({ post: posts });
// }


module.exports = {
    getAllPosts,
    addPost,
    updatePost,
    getPostById,
    DeletePost
}