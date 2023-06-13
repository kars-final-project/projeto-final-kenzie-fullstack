export class User {
    name: string
    email: string
    cpf: string
    phone: string
    birthday: string
    description: string
    type:  string
    password: string
}

enum UserType {
    COMPRADOR,
    ANUNCIANTE
}