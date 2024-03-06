import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator"

export class CreateUserDto { 
    
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string 

    @IsString()
    @IsNotEmpty()
    nome: string
    
    @IsString()
    @IsNotEmpty()
    senha: string
    telefone:  number
    cpf: string

}
