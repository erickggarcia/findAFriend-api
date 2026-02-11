import { Prisma, User } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { UsersRepository } from "../users-repository";

export class InMemoryUsersRepository implements UsersRepository {
    private users: User[] = [];

    async register(data: Prisma.UserUncheckedCreateInput) {
        const user = {
            id: data.id ?? randomUUID(),
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date(),
            updated_at: null,
            role: data.role || 'ADMIN',
        }

        this.users.push(user);

        return user
    }

    async findByEmail(email: string) {
        const userAlreadyExists = this.users.find(user => user.email === email)

        if (!userAlreadyExists) {
            return null
        }

        return userAlreadyExists
    }
}