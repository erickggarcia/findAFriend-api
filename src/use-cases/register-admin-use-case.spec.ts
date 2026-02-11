import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { describe, it, beforeEach, expect } from "vitest";
import { RegisterUserUseCase } from "./register-admin-use-case";

describe('register user useCase', () => {

    let usersRepository: InMemoryUsersRepository
    let sut: RegisterUserUseCase

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new RegisterUserUseCase(usersRepository)
    })

    it('should be able to register a new user', async () => {
        const { user } = await sut.execute({
            name: "Erick",
            lastName: "Test",
            email: "ericktest@example.com",
            password: "123456",
            role: "ADMIN",
        })

        expect(user.id).toEqual(expect.any(String))
    })
})