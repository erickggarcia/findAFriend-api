import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

describe('filter and fetch pets e2e', () => {
    beforeAll(async () => {
        await app.ready()

        await createAndAuthenticateUserOrOng(app, 'ONG')
        const ong = await prisma.ong.findUniqueOrThrow({ where: { email: 'ong@example.com' } })

        await prisma.pet.createMany({
            data: [
                { photoUrl: 'url', name: 'Buddy', breed: 'Golden', color: 'Golden', age: 2, size: 'BIG', details: '', ongId: ong.id },
                { photoUrl: 'url', name: 'Rex', breed: 'Poodle', color: 'White', age: 5, size: 'SMALL', details: '', ongId: ong.id },
            ]
        })
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should filter pets using query string values', async () => {
        const response = await request(app.server)
            .get('/pets/filter/sp-city-id')
            .query({ age: '2', page: '1' })

        expect(response.statusCode).toEqual(200)
        expect(response.body.pets).toHaveLength(1)
        expect(response.body.pets[0].name).toEqual('Buddy')
    })

    it('Should list every pet of the city when no filter is given', async () => {
        const response = await request(app.server)
            .get('/pets/filter/sp-city-id')

        expect(response.statusCode).toEqual(200)
        expect(response.body.pets).toHaveLength(2)
    })

    it('Should fetch pets of a city with page in the query string', async () => {
        const response = await request(app.server)
            .get('/pets/fetch/sp-city-id')
            .query({ page: '1' })

        expect(response.statusCode).toEqual(200)
        expect(response.body.pets).toHaveLength(2)
    })

    it('Should return 404 for a non-existing city', async () => {
        const response = await request(app.server)
            .get('/pets/fetch/non-existing-city')

        expect(response.statusCode).toEqual(404)
    })
})
