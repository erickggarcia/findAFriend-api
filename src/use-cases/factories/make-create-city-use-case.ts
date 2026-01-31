import { PrismaStatesRepository } from "@/repositories/prisma/prisma-states-repository";
import { CreateCityUseCase } from "../create-city";
import { PrismaCitiesRepository } from "@/repositories/prisma/prisma-cities-repository";

export function makeCreateCityUseCase() {
    const citiesRepository = new PrismaCitiesRepository();
    const statesRepository = new PrismaStatesRepository();
    const useCase = new CreateCityUseCase(citiesRepository, statesRepository);

    return useCase;

}