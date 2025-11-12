import { describe, it, beforeEach, expect } from "vitest";
import { RegisterOngUseCase } from "./register-ong";
import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";

describe('register ong useCase', () => {

    let statesRepository: InMemoryStatesRepository
    let citiesRepository: InMemoryCitiesRepository
    let ongsRepository: InMemoryOngsRepository
    let sut: RegisterOngUseCase

    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        citiesRepository = new InMemoryCitiesRepository()
        ongsRepository = new InMemoryOngsRepository()
        sut = new RegisterOngUseCase(ongsRepository, citiesRepository)
    })

    it('should be able to register a new ong', async () => {
        await statesRepository.create({ id: "sp-state-1", name: "São Paulo" })
        await citiesRepository.create({ id: "sp-city-1", name: "São Paulo", stateId: 'sp-state-1' })

        const { ong } = await sut.execute({
            photoUrl: null,
            name: "ONG Test",
            socialReason: "Social Reason Test",
            cnpj: "12.345.678/0001-90",
            whatsapp: "11999999999",
            email: "ongtest@example.com",
            password: "123456",
            address: "123 Test St",
            zipcode: "12345-678",
            cityId: "sp-city-1",
            role: "ADMIN",
        })

        expect(ong.id).toEqual(expect.any(String))
    })
})