import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";
import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { FilterPetsByItsCharacteristicsUseCase } from "./filter-pets-by-its-characteristics-use-case";
import { object } from "zod";

describe('filter pets by its characteristics useCase', () => {
    let sut: FilterPetsByItsCharacteristicsUseCase
    let petsRepository: InMemoryPetsRepository

    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new FilterPetsByItsCharacteristicsUseCase(petsRepository)
    })

    it('should be able to filter a pet by its characteristics', async () => {
        petsRepository.register({
            age: 8,
            breed: 'srd', color: 'black',
            name: 'pipoca',
            details: 'brave',
            ongId: randomUUID(),
            photoUrl: 'example.com.br',
            size: 'SMALL',
            id: randomUUID(),
            created_at: new Date()
        })

        petsRepository.register({
            age: 2,
            breed: 'Golden', color: 'black',
            name: 'Maia',
            details: 'brave',
            ongId: randomUUID(),
            photoUrl: 'example.com.br',
            size: 'BIG',
            id: randomUUID(),
            created_at: new Date()
        })

        const { pets } = await sut.execute({ size: 'BIG' })

        expect(pets).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    age: 2,
                    breed: 'Golden',
                    color: 'black',
                })
            ])
        )
    })
})