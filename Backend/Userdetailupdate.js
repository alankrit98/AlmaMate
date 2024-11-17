import { Router } from "express";
import {user as User} from "./Schema.js";
import { verifytoken } from "./middleware.js";
const UserRouter = Router();
UserRouter.post("/userdetailupdate", async (req, res) => {
    const { bio,  classYear,major, skills, experience } = req.body;
    const id = verifytoken(req.headers.authorization.split(" ")[1]);
    
    const user = await User.findById({_id : id});
    if (user) {
        user.bio = bio;
        user.skills = skills;
        user.work_experience = experience;
        user.current_class = classYear;
        user.current_course = major;
        user.education = req.body.education;
        const updatedUser = await user.save();
        res.json(updatedUser);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
}
);

UserRouter.get("/userdetail", async (req, res) => {
    const id = verifytoken(req.headers.authorization.split(" ")[1]);
    
    const user = await User.findById({_id : id});
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

export default UserRouter;
