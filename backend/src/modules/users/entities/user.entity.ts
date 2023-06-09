export class User {
    name: string
    email: string
    cpf: number
    phone: number
    birthday: string
    description: string
    type:  string
    password: string
}

enum UserType {
    COMPRADOR,
    ANUNCIANTE
}