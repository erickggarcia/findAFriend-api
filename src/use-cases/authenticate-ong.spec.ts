import { describe, it, beforeEach, expect } from "vitest";
import { AuthenticateOngUseCase } from "./authenticate-ong-use-case";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";
import { hash } from "bcryptjs";

let sut: AuthenticateOngUseCase
let ongsRepository: InMemoryOngsRepository

describe('authenticate useCase', () => {

    beforeEach(() => {

        ongsRepository = new InMemoryOngsRepository()
        sut = new AuthenticateOngUseCase(ongsRepository)
    })

    it('should be able to authenticate as a ong admin', async () => {

        await ongsRepository.register({
            photoUrl: null,
            name: "ONG Test",
            socialReason: "Social Reason Test",
            cnpj: "12.345.678/0001-90",
            whatsapp: "11999999999",
            email: "ongtest@example.com",
            password_hash: await hash("123456", 6),
            address: "123 Test St",
            zipcode: "12345-678",
            cityId: "sp-city-1",
            role: "ADMIN",
        })

        const { ong } = await sut.execute({ email: 'ongtest@example.com', password: '123456' })
        await expect(ong.id).toEqual(expect.any(String))
    })
})