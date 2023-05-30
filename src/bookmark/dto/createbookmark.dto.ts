import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBookMarkDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description: string;

}

