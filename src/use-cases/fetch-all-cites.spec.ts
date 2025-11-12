
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { fetchAllCitiesUseCase } from "./fetch-all-cites-use-case";

describe('filter pets by its characteristics useCase', () => {
    let sut: fetchAllCitiesUseCase
    let citiesRepository: InMemoryCitiesRepository

    beforeEach(() => {
        citiesRepository = new InMemoryCitiesRepository()
        sut = new fetchAllCitiesUseCase(citiesRepository)
    })


    it('should be able to fetch all cities', async () => {

        citiesRepository.create({ name: 'Rio de Janeiro', id: 'rio-city-id', stateId: 'rio-state-id' })
        citiesRepository.create({ name: 'São Paulo', id: 'sp-city-id', stateId: 'sp-state-id' })

        const { cities } = await sut.execute()

        await expect(cities).toHaveLength(2)
    })
})