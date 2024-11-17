import { Router } from "express";
import {user as User , post as Post} from "./Schema.js";
import { verifytoken } from "./middleware.js";
const PostRouter = Router();
PostRouter.post("/createpost", async (req, res) => {
    const { title, content } = req.body;
    const id = verifytoken(req.headers.authorization.split(" ")[1]);
    
    const user = await User.findById({_id : id});
    if (user) {
        const post = new Post({
            title,
            content,
            user: id,
        });
        const newPost = await post.save();
        res.json(newPost);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
}
);

PostRouter.get("/getposts", async (req, res) => {
    const posts = await Post.find({}).populate("user");
    res.json(posts.splice(-10));
});


PostRouter.post("/likepost", async (req, res) => {
    const { postid } = req.body;
    
    const post = await Post.findById({_id : postid});
    if (post) {
        post.likes += 1;
        const updatedPost = await post.save();
        res.json(updatedPost);
    } else {
        res.status(404);
        throw new Error("Post not found");
    }
}
);
export default PostRouter;