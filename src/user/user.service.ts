import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/all.interface';
import { EditUserDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as argon from 'argon2'

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>) { }
    getUserData(user: User) {
        return user
    }

    async updateUser(dto: EditUserDto, user: User) {
        try {

            let newobj = user;
            if (dto.firstname) {
                newobj.firstname = dto.firstname
            }
            if (dto.lastname) {
                newobj.lastname = dto.lastname
            }
            if (dto.email) {
                newobj.email = dto.email
            }
            if (dto.password) {
                const hash = await argon.hash(dto.password);
                newobj.hash = hash
            }
            const data = await this.userModel.findByIdAndUpdate({ _id: user._id }, { ...newobj }, { new: true })
            return data;
        } catch (e) {
            return e;
        }
    }

    async deleteUser(user: User) {
        try {
            const data = await this.userModel.findByIdAndDelete({ _id: user._id })
            return data;
        } catch (e) {
            return e;
        }
    }
}

