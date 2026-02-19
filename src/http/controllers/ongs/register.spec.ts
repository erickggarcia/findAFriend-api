import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";

describe('register ong e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to register a new ong', async () => {
        await prisma.state.create({
            data: {
                id: 'sp-state-id',
                name: 'São Paulo',
                uf: 'SP'
            }
        })

        await prisma.city.create({
            data: {
                id: 'sp-city-id',
                name: 'São Paulo',
                stateId: 'sp-state-id'
            }
        })

        const response = await request(app.server)
            .post('/ongs/register')
            .send({
                name: 'ONG Example',
                email: 'ong@example.com',
                password: '1234567',
                whatsapp: '11999999999',
                address: 'Rua exemplo, 123',
                cityId: 'sp-city-id',
                cnpj: '12.345.678/0001-90',
                socialReason: 'Razão Social Exemplo',
                zipcode: '12345-678',
                photoUrl: 'null'
            })

        console.log('4444444444444444444444')
        expect(response.statusCode).toEqual(201)
    })
})