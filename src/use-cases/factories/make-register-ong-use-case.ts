import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository";
import { RegisterOngUseCase } from "../register-ong";
import { PrismaCitiesRepository } from "@/repositories/prisma/prisma-cities-repository";

export function makeRegisterOngUseCase() {
    const ongsRepository = new PrismaOngsRepository()
    const citiesRepository = new PrismaCitiesRepository()
    const useCase = new RegisterOngUseCase(ongsRepository, citiesRepository)

    return useCase
}