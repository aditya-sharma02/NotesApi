import mongoose from "mongoose";

export class User extends mongoose.Document{
    id:string;
    createdate:Date;
    updatedate:Date;
    email:string;
    hash:string;
    firstname:string;
    lastname:string;
}

export interface Bookmark extends mongoose.Document{
    id:string;
    createdate:string;
    updatedate:string;
    title:string;
    description:string;
    link:string;
}