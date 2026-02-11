import { Prisma, User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
    async register(data: Prisma.UserUncheckedCreateInput): Promise<User> {
        const user = await prisma.user.create({ data })

        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!email) return null

        return user
    }
}