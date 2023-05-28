import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "./dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interface/all.interface";
import * as argon from 'argon2'
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config/dist";

@Injectable({})
export class AuthService {
    constructor(
        @InjectModel("User") private userModel: Model<User>,
        private jwtservice: JwtService,
        configservice:ConfigService
    ) { }

    async signup(dto: AuthDto) {
        try {
            const hash = await argon.hash(dto.password);
            const newobj = new this.userModel({
                email: dto.email,
                hash
            })
            const data = await newobj.save()
            return data as User;
        } catch (e) {
            if (e.code === 11000) {
                return "credentials taken already"
            }
            return e
        }
    }

    async signin(dto: AuthDto) {
        try {
            const data = await this.userModel.findOne({ email: dto.email });
            if (!data) {
                return 'Invalid Credentials';
            }
            const pwmatch = await argon.verify(data.hash, dto.password)
            if (!pwmatch) {
                throw new UnauthorizedException();
            }
            return await this.signtoken(data.id, data.email);
        } catch (e) {
            console.log(e)
            return e
        }
    }
    async signtoken(userid: string, email: string) {
        const payload = {
            sub: userid,
            email
        }
        const Secret = new ConfigService()
        const token = await this.jwtservice.signAsync(payload, {
            expiresIn: '15m',
            secret: `${Secret}`
        })
        return{
            access_token : token
        }
    }
}