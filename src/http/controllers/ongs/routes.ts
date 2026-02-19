import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { refresh } from "./refresh";

export function ongsRoutes(app: FastifyInstance) {
    app.post('/ongs/register', register)
    app.post('/ongs/authenticate', authenticate)
    app.post('/ongs/refresh', refresh)
}