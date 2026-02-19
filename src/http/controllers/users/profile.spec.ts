import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";
import request from "supertest";

describe('get user profile e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to get a user profile', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'USER')
        const response = await request(app.server)
            .get('/users/profile')
            .set('Authorization', `Bearer ${token}`)

        expect(response.status).toEqual(200)
        expect(response.body).toEqual(expect.objectContaining({
            email: 'JohnDoe@example.com'
        }))
    })
})