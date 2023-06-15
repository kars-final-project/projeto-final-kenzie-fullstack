import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString, IsEnum, minLength, MinLength } from "class-validator"

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
    @MinLength(8)
    @Transform( ({ value }) => hashSync(value, 10), { groups: ["pass"] } )
    password: string
}