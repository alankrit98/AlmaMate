import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      
    },
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



const mentorschema = new mongoose.Schema({
   user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",    
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const mentor = mongoose.model("Mentor", mentorschema);
export const user =  mongoose.model("User", UserSchema);
