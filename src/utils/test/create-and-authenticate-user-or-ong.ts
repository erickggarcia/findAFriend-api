import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateUserOrOng(app: FastifyInstance, type: 'USER' | 'ONG') {

    if (type === 'USER') {
        await prisma.user.create({
            data: {
                name: 'John',
                lastName: 'Doe',
                email: 'JohnDoe@example.com',
                password_hash: await hash('1234567', 6),
                role: 'ADMIN'
            }
        })

        const authResponse = await request(app.server)
            .post('/users/authenticate')
            .send({
                email: 'JohnDoe@example.com',
                password: '1234567'
            })

        const { token } = authResponse.body

        return {
            token
        }
    } else {
        await prisma.state.create({
            data: {
                name: 'São Paulo',
                id: 'sp-state-id',
                uf: 'SP'
            }
        })

        await prisma.city.create({
            data: {
                name: 'São Paulo',
                id: 'sp-city-id',
                stateId: 'sp-state-id'
            }
        })

        await prisma.ong.create({
            data: {
                name: 'ONG Example',
                email: 'ong@example.com',
                password_hash: await hash('1234567', 6),
                whatsapp: '11999999999',
                address: 'Rua exemplo, 123',
                cityId: 'sp-city-id',
                cnpj: '12.345.678/0001-90',
                socialReason: 'Razão Social Exemplo',
                zipcode: '12345-678',
                photoUrl: null
            }
        })

        const authResponse = await request(app.server)
            .post('/ongs/authenticate')
            .send({
                email: 'ong@example.com',
                password: '1234567'
            })

        const { token } = authResponse.body

        return {
            token
        }
    }
}