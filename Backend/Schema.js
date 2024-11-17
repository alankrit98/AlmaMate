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
    current_class: {
        type: String,
        default: "",
    },
    current_course: {
        type: String,
        default: "",
    },
    education: {
        type: Array,
        default: [  { degree: '', school: '', years: '' }],
    },
    bio: {
        type: String,
        default: "",
    },
    skills: {
        type: Array,
        default: [],
    },
    work_experience: {
        type: Array,
        default: [ { title: '', company: '', years: '', description: '' },],
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

const postschema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes : {
        type: Number,
        default: 0,
    } ,
 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



export const post = mongoose.model("Post", postschema);
export const mentor = mongoose.model("Mentor", mentorschema);
export const user =  mongoose.model("User", UserSchema);
