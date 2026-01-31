import { PrismaCitiesRepository } from "@/repositories/prisma/prisma-cities-repository";
import { FindCitiesUseCase } from "../find-cities-use-case";

export function makeFindCitiesUseCase() {
    const citiesRepository = new PrismaCitiesRepository();
    const useCase = new FindCitiesUseCase(citiesRepository);

    return useCase;

}