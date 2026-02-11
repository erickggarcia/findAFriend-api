import { describe, it, beforeEach, expect } from "vitest";
import { hash } from "bcryptjs";
import { AuthenticateUserUseCase } from "./authenticate-admin-use-case";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";

let sut: AuthenticateUserUseCase
let usersRepository: InMemoryUsersRepository

describe('authenticate user useCase', () => {

    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new AuthenticateUserUseCase(usersRepository)
    })

    it('should be able to authenticate as a ong admin', async () => {

        await usersRepository.register({
            name: "Erick",
            lastName: "Garcia",
            email: "ericktest@example.com",
            password_hash: await hash("123456", 6),
        })

        const { user } = await sut.execute({ email: 'ericktest@example.com', password: '123456' })
        await expect(user.id).toEqual(expect.any(String))
    })
})