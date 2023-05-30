import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditUserDto{
    @IsEmail()
    @IsOptional()
    email:string;

    @IsString()
    @IsOptional()
    password:string;

    // @IsDate()
    // createdate:Date;

    // @IsDate()
    // updatedate:Date;

    @IsString()
    @IsOptional()
    firstname:string;

    @IsString()
    @IsOptional()
    lastname:string;
}
