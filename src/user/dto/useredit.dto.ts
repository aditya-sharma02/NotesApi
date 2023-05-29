import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class EditUserDto{
    @IsEmail()
    email:string;

    @IsString()
    password:string;

    // @IsDate()
    // createdate:Date;

    // @IsDate()
    // updatedate:Date;

    @IsString()
    firstname:string;

    @IsString()
    lastname:string;
}
