import { Exclude } from "class-transformer";

export class User {
    readonly id: number;
    name: string
    email: string
    cpf: string
    phone: string
    birthday: string
    description: string
    type:  string

    @Exclude()
    password: string
}

enum UserType {
    COMPRADOR,
    ANUNCIANTE
}