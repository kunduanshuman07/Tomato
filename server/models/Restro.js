import mongoose from "mongoose";

const restroSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    food:[]
},{
    timestamps:true
})

const Restro=mongoose.model("Restros",restroSchema);
export {Restro};
