import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";
import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { FilterPetsByItsCharacteristicsUseCase } from "./filter-pets-by-its-characteristics-use-case";
import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";

describe('filter pets by its characteristics useCase', () => {
    let sut: FilterPetsByItsCharacteristicsUseCase
    let petsRepository: InMemoryPetsRepository
    let citiesRepository: InMemoryCitiesRepository
    let ongsRepository: InMemoryOngsRepository
    let statesRepository: InMemoryStatesRepository

    beforeEach(() => {
        citiesRepository = new InMemoryCitiesRepository()
        ongsRepository = new InMemoryOngsRepository()
        petsRepository = new InMemoryPetsRepository(ongsRepository)
        statesRepository = new InMemoryStatesRepository()

        sut = new FilterPetsByItsCharacteristicsUseCase(petsRepository, citiesRepository, ongsRepository)
    })



    it('should be able to filter a pet by its characteristics', async () => {

        statesRepository.create({ name: 'Rio de Janeiro', id: 'rio-state-id' })
        citiesRepository.create({ name: 'Rio de Janeiro', stateId: 'rio-state-id', id: 'rio-city-id' })

        ongsRepository.register({
            id: 'ong-01-id',
            address: 'Rua x',
            cityId: 'rio-city-id',
            cnpj: '20892823878932',
            email: 'example.com',
            name: 'ong01',
            socialReason: 'ong01ltda',
            password_hash: '7td6dgydsagd7',
            whatsapp: '21999999999',
            zipcode: '2298292839023',
        })

        petsRepository.register({
            age: 8,
            breed: 'srd', color: 'black',
            name: 'pipoca',
            details: 'brave',
            ongId: 'ong-01-id',
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
            ongId: 'ong-01-id',
            photoUrl: 'example.com.br',
            size: 'BIG',
            id: randomUUID(),
            created_at: new Date()
        })

        const { pets } = await sut.execute({ size: 'BIG' }, 'rio-city-id')

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

    it("should return max os 20 items", async () => {

        statesRepository.create({ name: 'Rio de Janeiro', id: 'rio-state-id' })
        citiesRepository.create({ name: 'Rio de Janeiro', stateId: 'rio-state-id', id: 'rio-city-id' })
        ongsRepository.register({
            id: 'ong-01-id',
            address: 'Rua x',
            cityId: 'rio-city-id',
            cnpj: '20892823878932',
            email: 'example.com',
            name: 'ong01',
            socialReason: 'ong01ltda',
            password_hash: '7td6dgydsagd7',
            whatsapp: '21999999999',
            zipcode: '2298292839023',
        })

        for (let i = 0; i < 40; i++) {
            petsRepository.register({
                age: 8,
                breed: 'srd', color: 'black',
                name: 'pipoca',
                details: 'brave',
                ongId: 'ong-01-id',
                photoUrl: 'example.com.br',
                size: 'BIG',
                id: `number ${i}`,
                created_at: new Date()
            })
        }

        const { pets } = await sut.execute({ size: 'BIG' }, 'rio-city-id', 2)

        expect(pets).toHaveLength(20)

    })
})