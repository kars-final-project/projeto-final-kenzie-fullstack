/* eslint-disable @typescript-eslint/no-unused-vars */
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

    @IsString()
    @IsNotEmpty()
    zip_code: string

    @IsString()
    @IsNotEmpty()
    state: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    street: string

    @IsString()
    @IsNotEmpty()
    number: string

    @IsString()
    complement: string

    @IsString()
    @IsNotEmpty()
    user_image: string
}