import fastify from 'fastify'
import { statesRoutes } from './http/controllers/states/routes'
import { citiesRoutes } from './http/controllers/cities/routes'

export const app = fastify()

app.register(statesRoutes)
app.register(citiesRoutes)