import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/all.interface';

@Injectable()
export class UserService {
    getUserData(user : User){
        return user
    }
}
