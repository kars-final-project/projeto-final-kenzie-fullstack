/* eslint-disable @typescript-eslint/no-unused-vars */
import { Exclude } from "class-transformer";

export class User {
    [x: string]: any;
    readonly id: number;
    name: string
    email: string
    cpf: string
    phone: string
    birthday: string
    description: string
    type:  string
    user_image: string

    @Exclude()
    password: string
}

enum UserType {
    COMPRADOR,
    ANUNCIANTE
}