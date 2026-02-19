import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-error";
import { makeRegisterUserUseCase } from "@/use-cases/factories/make-register-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerUserSchemaBody = z.object({
        name: z.string(),
        lastName: z.string(),
        email: z.email(),
        password: z.string(),
    })

    const { name, lastName, email, password } = registerUserSchemaBody.parse(request.body)

    try {
        const registerUserUseCase = makeRegisterUserUseCase()

        await registerUserUseCase.execute({ name, lastName, email, password })

        return reply.status(201).send({ message: 'user successfully registered' })
    } catch (err) {
        if (err instanceof UserAlreadyExistsError) {
            return reply.status(400).send({ message: err.message })
        }
    }
}