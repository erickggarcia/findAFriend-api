import { FastifyInstance } from "fastify";
import { fetch } from "./fetch";
import { filter } from "./filter";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export function petsRoutes(app: FastifyInstance) {
    app.get('/pets/fetch/:cityId', fetch)
    app.get('/pets/filter/:cityId', filter)
    app.post('/pets/register', { onRequest: [verifyJWT] }, register)
}