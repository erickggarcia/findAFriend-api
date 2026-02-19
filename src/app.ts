import fastify from 'fastify'
import { statesRoutes } from './http/controllers/states/routes'
import { citiesRoutes } from './http/controllers/cities/routes'
import { ongsRoutes } from './http/controllers/ongs/routes'
import { petsRoutes } from './http/controllers/pets/routes'
import { usersRoutes } from './http/controllers/users/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName: 'refreshToken',
        signed: false,
    }, sign: {
        expiresIn: '10m',
    }
})

app.register(fastifyCookie)
app.register(statesRoutes)
app.register(citiesRoutes)
app.register(ongsRoutes)
app.register(petsRoutes)
app.register(usersRoutes)