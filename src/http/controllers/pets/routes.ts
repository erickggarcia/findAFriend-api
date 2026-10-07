import { FastifyInstance } from "fastify";
import { fetch } from "./fetch";
import { filter } from "./filter";
import { register } from "./register";
import { details } from "./details";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export function petsRoutes(app: FastifyInstance) {
    app.get('/pets/fetch/:cityId', fetch)
    app.get('/pets/filter/:cityId', filter)
    app.get('/pets/:id', details)
    app.post('/pets/register', { onRequest: [verifyJWT, verifyUserRole('ONG')] }, register)
}
