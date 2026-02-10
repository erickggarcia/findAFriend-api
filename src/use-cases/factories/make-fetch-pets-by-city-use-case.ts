import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { PrismaCitiesRepository } from "@/repositories/prisma/prisma-cities-repository";
import { FetchPetsByCityUseCase } from "../fetch-pets-by-its-city-use-case";

export function makeFetchPetsByCityUseCase() {
    const petsRepository = new PrismaPetsRepository();
    const citiesRepository = new PrismaCitiesRepository();
    const useCase = new FetchPetsByCityUseCase(petsRepository, citiesRepository);

    return useCase;
}