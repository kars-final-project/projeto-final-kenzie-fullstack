import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/database/prisma.service"
import { plainToInstance } from "class-transformer" 
import { CreateUserDto } from "../../dto/create-user.dto"
import { UsersRepository } from "../users.repository"
import { User } from "../../entities/user.entity"
import { UpdateUserDto } from "../../dto/update-user.dto"
import { hashSync } from "bcryptjs"

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateUserDto): Promise<User> {
        const user = new User()
        Object.assign(user, {
            ...data
        })
        const newUser = await this.prisma.user.create({
            data: { 
                name:user.name,
                email:user.email,
                phone:user.phone,
                birthday:user.birthday,
                cpf:user.cpf,
                description:user.description,
                type:user.type,
                password:user.password
            }
        })
        return plainToInstance(User, newUser)
    }
    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany()
        return users
    }
    async findOne(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })
        return plainToInstance(User, user)
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findFirst({
                    where: {email}
        })
        return user
    }
    async update(id: number, data: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id },
            data: { ...data }
        })
        return plainToInstance(User, user)
    }
    async delete(id: number): Promise<void> {
        await this.prisma.user.delete({
            where: { id }
        })
    }
    async updateToken(email: string, resetToken: string): Promise<void> {
        await this.prisma.user.update({
            where: {email},
            data: {reset_token: resetToken}
        })
    }

    async findByToken(token: string): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: { reset_token: token }
        })
        return user
    }

    async updatePassword(id: number, password: string): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: {
                password: hashSync(password, 10),
                reset_token: null
            }
        })
    }
}