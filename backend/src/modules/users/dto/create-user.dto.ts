import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator"

enum UserType {
    COMPRADOR = 'comprador',
    ANUNCIANTE = 'anunciante'
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string
    
    
    @IsString()
    @IsNotEmpty()
    cpf: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    birthday: string

    @IsString()
    @IsNotEmpty()
    description: string
    
    // @IsEnum(UserType)
    @IsString()
    @IsNotEmpty()
    type: string
    
    @IsString()
    @IsNotEmpty()
    password: string
}