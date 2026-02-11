import { Prisma, User } from "@prisma/client"

export interface UsersRepository {
    register(data: Prisma.UserUncheckedCreateInput): Promise<User>
    findByEmail(email: string): Promise<User | null>
}