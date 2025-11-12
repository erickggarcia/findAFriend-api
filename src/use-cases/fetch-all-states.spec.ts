
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { FetchAllStatesUseCase } from "./fetch-all-states-use-case";

describe('filter pets by its characteristics useCase', () => {
    let sut: FetchAllStatesUseCase
    let statesRepository: InMemoryStatesRepository

    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        sut = new FetchAllStatesUseCase(statesRepository)
    })


    it('should be able to fetch all states', async () => {

        statesRepository.create({ name: 'Rio de Janeiro', id: 'rio-state-id' })
        statesRepository.create({ name: 'São Paulo', id: 'sp-state-id' })

        const { states } = await sut.execute()

        await expect(states).toHaveLength(2)
    })
})