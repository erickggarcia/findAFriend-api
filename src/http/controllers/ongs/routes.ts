import { FastifyInstance } from "fastify";
import { register } from "./register";

export function ongsRoutes(app: FastifyInstance) {
    app.post('/ongs/register', register)
}