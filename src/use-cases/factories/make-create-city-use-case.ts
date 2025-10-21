import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { CreateCityUseCase } from "../create-city";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";

export function makeCreateCityUseCase() {
    const createCityRepository = new InMemoryCitiesRepository();
    const createStateRepository = new InMemoryStatesRepository();
    const useCase = new CreateCityUseCase(createCityRepository, createStateRepository);

    return useCase;

}