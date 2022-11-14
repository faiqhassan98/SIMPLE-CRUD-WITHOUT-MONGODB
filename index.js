const express = require('express');
const postRouter = require("./routes/postRoute");

const app = express();
app.use(express.json());

app.use('/api', postRouter);


app.listen(4930 , () =>{
    console.log("server is running on port 4930");
});
