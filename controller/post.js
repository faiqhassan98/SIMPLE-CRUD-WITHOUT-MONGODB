const posts = [{ id: 1, title: "faiq" }, { id: 2, title: "HASSAN" }]

function getAllPosts(req, res) {
    res.send({ msg: "get all posts", post: posts });
}

function getPostById(req, res) {
    // res.send({ msg: "get post by id", post: posts });
    console.log("get json by id", req.params.id );
    const abc = req.params.id;
    res.send(posts.find( post => post.id == abc ));
}

function addPost(req, res) {
    const newData = req.body
    posts.push(newData);
    res.send({ post: posts });
}

function updatePost(req, res) {
    //     const updData = req.body
    //         if (posts.id = 1 ){
    //             res.send(updData);
    //         }
    //         else{
    //             res.send("Id Not Found");
    //         }
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
    getPostById
}