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

    const registerOngUseCase = makeRegisterUserUseCase()

    await registerOngUseCase.execute({ name, lastName, email, password })

    return reply.status(201).send({ message: 'user successfully registered' })
}