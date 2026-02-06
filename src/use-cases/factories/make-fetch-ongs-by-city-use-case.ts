import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository";
import { FetchOngsByCityUseCase } from "../fetch-ongs-by-city-use-case";

export function makefetchOngsByCityUseCase() {
    const ongsRepository = new PrismaOngsRepository()
    const useCase = new FetchOngsByCityUseCase(ongsRepository)

    return useCase
}