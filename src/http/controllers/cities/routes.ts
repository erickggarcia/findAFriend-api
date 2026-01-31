import { FastifyInstance } from "fastify";
import { create } from "./create";
import { find } from "./find";

export function citiesRoutes(app: FastifyInstance) {
    app.post('/cities/create', create)
    app.get('/cities/:stateId', find)
}