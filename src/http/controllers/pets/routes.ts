import { FastifyInstance } from "fastify";
import { fetch } from "./fetch";
import { filter } from "./filter";
import { register } from "./register";

export function petsRoutes(app: FastifyInstance) {
    app.get('/pets/fetch/:cityId', fetch)
    app.get('/pets/filter/:cityId', filter)
    app.post('/pets/register', register)
}