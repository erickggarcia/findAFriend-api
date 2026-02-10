import fastify from 'fastify'
import { statesRoutes } from './http/controllers/states/routes'
import { citiesRoutes } from './http/controllers/cities/routes'
import { ongsRoutes } from './http/controllers/ongs/routes'
import { petsRoutes } from './http/controllers/pets/routes'

export const app = fastify()

app.register(statesRoutes)
app.register(citiesRoutes)
app.register(ongsRoutes)
app.register(petsRoutes)