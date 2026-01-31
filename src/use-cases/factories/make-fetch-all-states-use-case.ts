import { PrismaStatesRepository } from "@/repositories/prisma/prisma-states-repository"
import { FetchAllStatesUseCase } from "../fetch-all-states-use-case"

export function makeFetchAllStatesUseCase() {
    const statesRepository = new PrismaStatesRepository()
    const useCase = new FetchAllStatesUseCase(statesRepository)

    return useCase
}