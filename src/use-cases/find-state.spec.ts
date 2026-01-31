import { describe, it, beforeEach, expect } from "vitest";
import { FindStateUseCase } from "./find-state-use-case";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";

describe('find state unity test useCase', () => {
    let statesRepository: InMemoryStatesRepository
    let sut: FindStateUseCase

    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        sut = new FindStateUseCase(statesRepository)
    })

    it('Should be able to find a state by its id', async () => {
        statesRepository.create({ id: 'rio-state-id', name: 'Rio de Janeiro' })

        const { state } = await sut.execute({ id: 'rio-state-id' })

        expect(state).toEqual(
            expect.objectContaining({
                id: 'rio-state-id',
                name: 'Rio de Janeiro'
            }))
    })

})