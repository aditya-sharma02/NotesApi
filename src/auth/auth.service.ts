import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/all.interface";

@Injectable({})
export class AuthService {
    constructor(@InjectModel("User") private userModel: Model<User>) { }
    async signup(dto: AuthDto) {
        try {
            const newobj = new this.userModel(dto)
            const data = await newobj.save()
            return data;
        } catch (e) {
            if (e.code === 11000){
                return "credentials taken already"
            }
            return e
        }
    }
}