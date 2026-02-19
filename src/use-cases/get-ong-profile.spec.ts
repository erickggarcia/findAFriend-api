import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";
import { GetOngProfileUseCase } from "./get-ong-profile-use-case";

let sut: GetOngProfileUseCase
let ongsRepository: InMemoryOngsRepository

describe('get ong profile useCase', () => {
    beforeEach(() => {
        ongsRepository = new InMemoryOngsRepository()
        sut = new GetOngProfileUseCase(ongsRepository)
    })

    it('should be able to get ong profile', async () => {
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

        const { ong } = await sut.execute({ id: 'ong-id-1' })

        expect(ong.id).toEqual(expect.any(String))
    })
})