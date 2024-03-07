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

     @Length(1, 11,
         { message: 'O telefone deve ter no máximo 11 dígitos.' })
    @IsNotEmpty()
    telefone:  string

    @IsString()
    @IsNotEmpty()
    cpf: string

}
