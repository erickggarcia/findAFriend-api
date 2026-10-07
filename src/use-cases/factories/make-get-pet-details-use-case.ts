import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository";
import { GetPetDetailsUseCase } from "../get-pet-details-use-case";

export function makeGetPetDetailsUseCase() {
    const petsRepository = new PrismaPetsRepository()
    const ongsRepository = new PrismaOngsRepository()
    const useCase = new GetPetDetailsUseCase(petsRepository, ongsRepository)
    return useCase
}
