import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private authservice: AuthService) { }
    @Post('/signup')
    signup(@Body('NAME') name: string) {
        return this.authservice.signup(name)
    }
}