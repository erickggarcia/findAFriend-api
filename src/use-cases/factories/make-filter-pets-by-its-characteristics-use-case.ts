import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { FilterPetsByItsCharacteristicsUseCase } from "../filter-pets-by-its-characteristics-use-case";
import { PrismaCitiesRepository } from "@/repositories/prisma/prisma-cities-repository";

export function makeFilterPetsByItsCharacteristicsUseCase() {
    const petsRepository = new PrismaPetsRepository();
    const citiesRepository = new PrismaCitiesRepository();
    const useCase = new FilterPetsByItsCharacteristicsUseCase(petsRepository, citiesRepository);

    return useCase;
}