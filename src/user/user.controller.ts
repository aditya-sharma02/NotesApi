import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from 'src/interface/all.interface';
import { EditUserDto } from './dto';


@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(
        private userservice: UserService
    ) { }


    @Get('/me')
    getUser(@GetUser() user: User) {
        return this.userservice.getUserData(user)
    }

    @Patch('/update')
    async updateUser(@GetUser() user: User, @Body() dto: EditUserDto) {
        return await this.userservice.updateUser(dto,user)
    }

}
