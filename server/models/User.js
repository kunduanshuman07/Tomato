import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String
    },
    locality:{
        type:String
    },
    pincode:{
        type:String
    },
    landmark:{
        type:String
    },
    state:{
        type:String
    },
    orders:[],
    cart:[],
},{
    timestamps:true
})

const User=mongoose.model('Users',userSchema);
export {User};