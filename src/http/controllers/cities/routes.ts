import { FastifyInstance } from "fastify";
import { create } from "./create";
import { find } from "./find";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export function citiesRoutes(app: FastifyInstance) {
    app.post('/cities/create', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, create)
    app.get('/cities/:stateId', find)
}