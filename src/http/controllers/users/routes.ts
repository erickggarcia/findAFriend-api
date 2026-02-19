import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refresh } from "./refresh";
import { profile } from "./profile";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export function usersRoutes(app: FastifyInstance) {
    app.post('/users/register', register)
    app.post('/users/authenticate', authenticate)
    app.post('/users/refresh', refresh)
    app.get('/users/profile', { onRequest: [verifyJWT] }, profile)
}