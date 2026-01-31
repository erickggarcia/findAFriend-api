import { FastifyInstance } from "fastify";
import { fetch } from "./fetch";
import { find } from "./find";
import { create } from "./create";

export async function statesRoutes(app: FastifyInstance) {
    app.get('/states', fetch)
    app.get('/states/:id', find)
    app.post('/states/create', create)
}