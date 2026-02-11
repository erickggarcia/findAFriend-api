import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository";
import { AuthenticateOngUseCase } from "../authenticate-ong-use-case";

export function makeAuthenticateOngUseCase() {
    const ongsRepository = new PrismaOngsRepository()
    const useCase = new AuthenticateOngUseCase(ongsRepository)

    return useCase
}