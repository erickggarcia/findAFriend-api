import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

describe('pet details e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should return the pet with the ong contact', async () => {
        await createAndAuthenticateUserOrOng(app, 'ONG')
        const ong = await prisma.ong.findUniqueOrThrow({ where: { email: 'ong@example.com' } })

        const pet = await prisma.pet.create({
            data: { photoUrl: 'url', name: 'Buddy', breed: 'Golden', color: 'Golden', age: 2, size: 'BIG', details: '', ongId: ong.id }
        })

        const response = await request(app.server).get(`/pets/${pet.id}`)

        expect(response.statusCode).toEqual(200)
        expect(response.body.pet.name).toEqual('Buddy')
        expect(response.body.ong.whatsapp).toEqual('11999999999')
        expect(response.body.ong).not.toHaveProperty('password_hash')
    })

    it('Should return 404 for a non-existing pet', async () => {
        const response = await request(app.server).get('/pets/non-existing-id')

        expect(response.statusCode).toEqual(404)
    })
})
