import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService { 
    
    signup(name:string){
        return name;
    }
}