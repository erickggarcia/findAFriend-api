import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

describe('create state e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should return 401 without a token', async () => {
        const response = await request(app.server)
            .post('/states/create')
            .send({ name: 'Minas Gerais', uf: 'MG' })

        expect(response.statusCode).toEqual(401)
    })

    it('Should allow an admin to create a state', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'USER')

        const response = await request(app.server)
            .post('/states/create')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Minas Gerais', uf: 'MG' })

        expect(response.statusCode).toEqual(201)
    })

    it('Should not allow an ong to create a state', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'ONG')

        const response = await request(app.server)
            .post('/states/create')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Bahia', uf: 'BA' })

        expect(response.statusCode).toEqual(403)
    })
})
