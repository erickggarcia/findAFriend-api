import { FastifyInstance } from "fastify";
import { fetch } from "./fetch";
import { find } from "./find";
import { create } from "./create";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function statesRoutes(app: FastifyInstance) {
    app.get('/states', fetch)
    app.get('/states/:id', find)
    app.post('/states/create', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, create)
}