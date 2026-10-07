import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refresh } from "./refresh";
import { profile } from "./profile";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export function ongsRoutes(app: FastifyInstance) {
    app.post('/ongs/register', register)
    app.post('/ongs/authenticate', authenticate)
    app.post('/ongs/refresh', refresh)
    app.get('/ongs/profile', { onRequest: [verifyJWT, verifyUserRole('ONG')] }, profile)
}