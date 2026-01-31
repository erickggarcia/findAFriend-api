import { beforeEach, describe, expect, it } from "vitest";
import { FetchOngsByCityIdUseCase } from "./fetch-ongs-by-city-id-use-case";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";

let statesRepository: InMemoryStatesRepository
let citiesRepository: InMemoryCitiesRepository
let ongsRepository: InMemoryOngsRepository
let sut: FetchOngsByCityIdUseCase

describe('fetch ongs by city id useCase', () => {
    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        citiesRepository = new InMemoryCitiesRepository()
        ongsRepository = new InMemoryOngsRepository()
        sut = new FetchOngsByCityIdUseCase(ongsRepository)
    })


    it('should be able to list minimum of two ongs', async () => {
        statesRepository.create({ id: 'rio-state-id', name: 'Rio de Janeiro' })
        citiesRepository.create({
            name: 'Rio de Janeiro',
            stateId: 'rio-state-id',
            id: 'rio-city-id',
        })
        ongsRepository.register({
            photoUrl: null,
            name: "ONG Test",
            socialReason: "Social Reason Test",
            cnpj: "12.345.678/0001-90",
            whatsapp: "11999999999",
            email: "ongtest@example.com",
            password_hash: "123456",
            address: "123 Test St",
            zipcode: "12345-678",
            cityId: "rio-city-id",
            role: "ADMIN",
        })

        ongsRepository.register({
            photoUrl: null,
            name: "ONG Test",
            socialReason: "Social Reason Test",
            cnpj: "12.345.678/0001-92",
            whatsapp: "11999999998",
            email: "ongtest2@example.com",
            password_hash: "123456",
            address: "123 Test Sta",
            zipcode: "12345-698",
            cityId: "rio-city-id",
            role: "ADMIN",
        })

        const { ongs } = await sut.execute('rio-city-id')
        expect(ongs).toHaveLength(2)
    })

    it('should have the maximum of 20 items', async () => {
        statesRepository.create({ id: 'rio-state-id', name: 'Rio de Janeiro' })
        citiesRepository.create({
            name: 'Rio de Janeiro',
            stateId: 'rio-state-id',
            id: 'rio-city-id',
        })

        for (let i = 0; i < 40; i++) {
            ongsRepository.register({
                photoUrl: null,
                name: "ONG Test",
                socialReason: "Social Reason Test",
                cnpj: "12.345.678/0001-90",
                whatsapp: "11999999999",
                email: `ongtest${i}@example.com`,
                password_hash: "123456",
                address: "123 Test St",
                zipcode: "12345-678",
                cityId: "rio-city-id",
                role: "MEMBER",
            })
        }

        const { ongs } = await sut.execute('rio-city-id')
        expect(ongs).toHaveLength(20)
    })

})