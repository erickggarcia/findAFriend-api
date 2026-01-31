import { PrismaStatesRepository } from "@/repositories/prisma/prisma-states-repository";
import { FindStateUseCase } from "../find-state-use-case";

export function makeFindStateUseCase() {
    const statesRepository = new PrismaStatesRepository()
    const useCase = new FindStateUseCase(statesRepository)

    return useCase
}