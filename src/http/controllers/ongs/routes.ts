import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";

export function ongsRoutes(app: FastifyInstance) {
    app.post('/ongs/register', register)
    app.post('/ongs/authenticate', authenticate)
}