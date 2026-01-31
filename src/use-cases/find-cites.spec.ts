
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { FindCitiesUseCase } from "./find-cities-use-case";

describe('filter pets by its characteristics useCase', () => {
    let sut: FindCitiesUseCase
    let citiesRepository: InMemoryCitiesRepository

    beforeEach(() => {
        citiesRepository = new InMemoryCitiesRepository()
        sut = new FindCitiesUseCase(citiesRepository)
    })


    it('should be able to find cities based on stateId', async () => {

        citiesRepository.create({ name: 'Rio de Janeiro', id: 'rio-city-id', stateId: 'rio-state-id' })
        citiesRepository.create({ name: 'Cabo Frio', id: 'cabo-frio-city-id', stateId: 'rio-state-id' })
        citiesRepository.create({ name: 'São Paulo', id: 'sp-city-id', stateId: 'sp-state-id' })

        const { cities } = await sut.execute({ stateId: 'rio-state-id' })

        await expect(cities).toHaveLength(2)
    })
})