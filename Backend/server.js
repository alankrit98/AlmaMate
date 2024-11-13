import express from "express";
import mentorshipRouter from "./mentorship.js";
import authRouter from "./Auth.js";
import cors from "cors";
import db from "./db.js";
import { user } from "./Schema.js";
import { verifytoken } from "./middleware.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/mentorship", mentorshipRouter);
app.use("/auth", authRouter);
app.get("/user" , (req,res) => {
  const id = verifytoken(req.token) ;
  user.findOne({ _id:  id}).then((data) => {
    res.send(data);
  });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  db();
});