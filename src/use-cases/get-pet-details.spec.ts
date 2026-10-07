import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";
import { GetPetDetailsUseCase } from "./get-pet-details-use-case";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

let sut: GetPetDetailsUseCase
let ongsRepository: InMemoryOngsRepository
let petsRepository: InMemoryPetsRepository

describe('get pet details useCase', () => {
    beforeEach(() => {
        ongsRepository = new InMemoryOngsRepository()
        petsRepository = new InMemoryPetsRepository(ongsRepository)
        sut = new GetPetDetailsUseCase(petsRepository, ongsRepository)
    })

    it('should be able to get pet details with the ong contact', async () => {
        await ongsRepository.register({
            id: 'ong-id-1',
            email: 'erick@example.com',
            name: 'ong1',
            socialReason: 'Test Social Reason',
            cnpj: '12345678901234',
            whatsapp: '1234567890',
            password_hash: '123456',
            address: 'Test Address',
            zipcode: '12345678',
            cityId: 'city-id-1'
        })

        await petsRepository.register({
            id: 'pet-id-1',
            photoUrl: 'https://example.com/photo.jpg',
            name: 'Buddy',
            breed: 'Golden Retriever',
            color: 'Golden',
            age: 3,
            size: 'BIG',
            details: 'Amigável',
            ongId: 'ong-id-1'
        })

        const { pet, ong } = await sut.execute({ id: 'pet-id-1' })

        expect(pet.name).toEqual('Buddy')
        expect(ong.whatsapp).toEqual('1234567890')
        expect(ong).not.toHaveProperty('password_hash')
    })

    it('should not be able to get details of a non-existing pet', async () => {
        await expect(() => sut.execute({ id: 'non-existing-id' }))
            .rejects.toBeInstanceOf(ResourceNotFoundError)
    })
})
