import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

const pet = {
    photoUrl: 'https://example.com/photo.jpg',
    name: 'Buddy',
    breed: 'Golden Retriever',
    color: 'Golden',
    age: 3,
    size: 'BIG',
    details: 'Amigável',
}

describe('register pet e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should register the pet for the authenticated ong, ignoring any ongId in the body', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'ONG')

        const response = await request(app.server)
            .post('/pets/register')
            .set('Authorization', `Bearer ${token}`)
            .send({ ...pet, ongId: 'another-ong-id' })

        expect(response.statusCode).toEqual(201)

        const ong = await prisma.ong.findUniqueOrThrow({ where: { email: 'ong@example.com' } })
        const createdPet = await prisma.pet.findFirstOrThrow()
        expect(createdPet.ongId).toEqual(ong.id)
    })

    it('Should not allow a user token to register a pet', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'USER')

        const response = await request(app.server)
            .post('/pets/register')
            .set('Authorization', `Bearer ${token}`)
            .send(pet)

        expect(response.statusCode).toEqual(403)
    })

    it('Should not allow an unauthenticated request to register a pet', async () => {
        const response = await request(app.server)
            .post('/pets/register')
            .send(pet)

        expect(response.statusCode).toEqual(401)
    })
})
