import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        default:Date.now
    },
    createdate: {
        require:true,
        type: Date,
        default: Date.now
    },
    updatedate: {
        require:true,
        type: Date,
        default: Date.now
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    hash:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
})


export const BookMark = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default:Date.now
    },
    createdate: {
        type: Date,
        default:Date.now,
        require:true
    },
    updatedate: {
        type: Date,
        default:Date.now,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    link:{
        type:String,
        require:true
    }
})