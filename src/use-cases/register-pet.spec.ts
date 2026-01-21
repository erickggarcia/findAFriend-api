import { beforeEach, describe, expect, it } from "vitest";
import { RegisterPetUseCase } from "./register-pet";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";
import { InMemoryOngsRepository } from "@/repositories/in-memory/in-memory-ongs-repository";

let sut: RegisterPetUseCase
let petsRepository: InMemoryPetsRepository
let ongsRepository: InMemoryOngsRepository

describe("Register Pet Use Case", () => {
    beforeEach(() => {
        ongsRepository = new InMemoryOngsRepository()
        petsRepository = new InMemoryPetsRepository(ongsRepository)
        sut = new RegisterPetUseCase(petsRepository)
    })

    it("should be able to register a pet", async () => {
        const { pet } = await sut.execute({
            photoUrl: "https://example.com/photo.jpg",
            name: "Buddy",
            breed: "Golden Retriever",
            color: "Golden",
            age: 3,
            size: "Large",
            details: "Amigável e energético",
            ongId: "some-ong-id"
        })

        expect(pet.id).toEqual(expect.any(String))
    })
})