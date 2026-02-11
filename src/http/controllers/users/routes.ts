import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";

export function usersRoutes(app: FastifyInstance) {
    app.post('/users/register', register)
    app.post('/users/authenticate', authenticate)
}