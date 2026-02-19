import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";

describe('register user e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to register a new user', async () => {
        const response = await request(app.server)
            .post('/users/register')
            .send({
                name: 'Erick',
                lastName: 'Test',
                email: 'erick@test.com',
                password: '123456'
            })

        expect(response.statusCode).toEqual(201)
    })
})