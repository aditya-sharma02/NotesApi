import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller()
export class AuthController {
    constructor(private authservice: AuthService) { }
    @Post('/signup')
    async signup(@Body() dto: AuthDto) {
        return await this.authservice.signup(dto)
    }

    @Post('/signin')
    async signin(@Body() dto: AuthDto) {
        return await this.authservice.signin(dto)
    }
}