import { IsEmail, IsNotEmpty, IsString, IsNumber, IsEnum } from "class-validator"

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
    
    
    @IsNumber()
    @IsNotEmpty()
    cpf: number

    @IsNumber()
    @IsNotEmpty()
    phone: number

    @IsString()
    @IsNotEmpty()
    birthday: string

    @IsString()
    @IsNotEmpty()
    description: string
    
    @IsEnum(UserType)
    @IsNotEmpty()
    type: UserType
    
    @IsString()
    @IsNotEmpty()
    password: string
}