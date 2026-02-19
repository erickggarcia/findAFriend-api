import { beforeEach, describe, expect, it } from "vitest";
import { GetUserProfileUseCase } from "./get-user-profile-use-case";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";

let sut: GetUserProfileUseCase
let usersRepository: InMemoryUsersRepository

describe('get user profile useCase', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new GetUserProfileUseCase(usersRepository)
    })

    it('should be able to get user profile', async () => {
        await usersRepository.register({
            id: 'user-id-1',
            email: 'erick@example.com',
            name: 'Erick',
            lastName: 'Test',
            password_hash: '123456',
        })

        const { user } = await sut.execute({ id: 'user-id-1' })

        expect(user.id).toEqual(expect.any(String))

    })
})