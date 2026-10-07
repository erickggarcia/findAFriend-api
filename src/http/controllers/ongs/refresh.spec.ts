import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

describe('refresh ong token e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should issue a new token keeping the ong id and role', async () => {
        await createAndAuthenticateUserOrOng(app, 'ONG')

        const authResponse = await request(app.server)
            .post('/ongs/authenticate')
            .send({ email: 'ong@example.com', password: '1234567' })

        const cookies = authResponse.get('Set-Cookie') ?? []

        const response = await request(app.server)
            .post('/ongs/refresh')
            .set('Cookie', cookies)

        expect(response.statusCode).toEqual(200)

        const payload = app.jwt.decode<{ sub: string, role: string }>(response.body.token)
        const originalPayload = app.jwt.decode<{ sub: string }>(authResponse.body.token)

        expect(payload?.role).toEqual('ONG')
        expect(payload?.sub).toEqual(originalPayload?.sub)
        expect(response.get('Set-Cookie')).toEqual([expect.stringContaining('refreshToken=')])
    })

    it('Should return 401 without the refresh cookie', async () => {
        const response = await request(app.server).post('/ongs/refresh')

        expect(response.statusCode).toEqual(401)
    })
})
