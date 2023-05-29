import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/all.interface';
import { EditUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel:Model<User>){}
    getUserData(user: User) {
        return user
    }

    async updateUser(dto: EditUserDto,user:User) {
        try {
            let newobj = user;
            newobj = {...newobj,dto}
            // const data = await this.userModel.findByIdAndUpdate({_id:user._id},{...user,hash:dto.password},{new:true})
            // console.log(data)
            // return data as User[];
            // return dto;
        } catch (e) {
            // console.log(e);
            return e;
        }
    }
}

//9799529471
