import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";

export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User>
    abstract findAll(): Promise<User[]>
    abstract findOne(id: number): Promise<User> | User
    abstract findByEmail(email: string): Promise<User> | User
    abstract findByToken(token: string): Promise<User> | User
    abstract update(id: number, data: UpdateUserDto, authId: string): Promise<User>
    abstract delete(id: number): Promise<void>
    abstract updateToken(email: string, resetToken: string): Promise<void> | void
    abstract updatePassword(id: number, password: string): Promise<void> | void
}