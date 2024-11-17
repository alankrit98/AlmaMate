import { Router} from "express";
import { user , mentor } from "./Schema.js";
const mentorshipRouter = Router();

mentorshipRouter.post("/mentorregistration", async (req, res) => {
  try {
    
    const {name , email , role} = req.body;
    const existinguser = await user.findOne({ email });
    if(!existinguser){
      return res.status(400).send("User does not exist");
    }
    const mentor1 = await mentor.create({user: existinguser._id, type : role });
    if(role == "mentor"){
      res.status(200).send({data : existinguser});
    }
    else{
      res.status(200).send({data : existinguser});
    }
    
  } catch (error) {
    res.status(400).send("Error occured");
    console.log(error);
    
  }
         
       
}); 

export default mentorshipRouter;