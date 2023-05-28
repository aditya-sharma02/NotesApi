import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/interface/all.interface";

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @InjectModel('User') private UserModel: Model<User>,
        configservice: ConfigService
    ) {
        const secret = configservice.get<string>('SECRET')
        
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: `${secret}`
        })
    }

    // validate  function append kar dega payload ko req.user( jo req mai object de rhe hai ) mai 
    async validate(payload: any) {
        // console.log(payload);
        const data = await this.UserModel.findOne({ id: payload.sub })
        delete data.hash;
        return data;
    }
}