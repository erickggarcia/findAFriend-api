import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { randomUUID } from "node:crypto";
import { beforeEach, describe, expect, it } from "vitest";
import { ListPetsByItsCityUseCase } from "./list-pets-by-its-city-use-case";
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";

describe('list pets by its city useCase', () => {

    let sut: ListPetsByItsCityUseCase
    let statesRepository: InMemoryStatesRepository
    let citiesRepository: InMemoryCitiesRepository
    let petsRepository: InMemoryPetsRepository
    let ongsRepository: InMemoryOngsRepository

    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository(ongsRepository)
        statesRepository = new InMemoryStatesRepository()
        citiesRepository = new InMemoryCitiesRepository()
        ongsRepository = new InMemoryOngsRepository()

        sut = new ListPetsByItsCityUseCase(petsRepository, citiesRepository)
    })

    it('should be able to list pets according to its city', async () => {

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


        const { pets } = await sut.execute('rio-city-id')

        await expect(pets).toHaveLength(2)

    })

    it('should return city does not exists error', async () => {
        statesRepository.create({ name: 'São Paulo', id: 'sp-state-id' })
        citiesRepository.create({ name: 'São Paulo', stateId: 'sp-state-id', id: 'sp-city-id' })
        ongsRepository.register({
            id: 'ong-01-id',
            address: 'Rua x',
            cityId: 'sp-city-id',
            cnpj: '20892823878932',
            email: 'example.com',
            name: 'ong02',
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

        await expect(sut.execute(randomUUID())).rejects.toBeInstanceOf(CityDoesNotExistsError)
    })
})