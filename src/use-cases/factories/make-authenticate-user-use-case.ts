import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateUserUseCase } from "../authenticate-admin-use-case";

export function makeAuthenticateUserUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new AuthenticateUserUseCase(usersRepository)

    return useCase
}