import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository";
import { GetOngProfileUseCase } from "../get-ong-profile-use-case";

export function makeGetOngProfileUseCase() {
    const ongsRepository = new PrismaOngsRepository()
    const useCase = new GetOngProfileUseCase(ongsRepository)
    return useCase
}