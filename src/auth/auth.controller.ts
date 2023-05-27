import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller()
export class AuthController {
    constructor(private authservice: AuthService) { }
    @Post('/signup')
    signup(@Body() dto: AuthDto) {
        return this.authservice.signup(dto)
    }
}