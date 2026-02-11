import { makeAuthenticateOngUseCase } from "@/use-cases/factories/make-authenticate-ong-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateOngBodySchema = z.object({
        email: z.email(),
        password: z.string(),

    })

    const { email, password } = authenticateOngBodySchema.parse(request.body)

    const registerOngUseCase = makeAuthenticateOngUseCase()

    const { ong } = await registerOngUseCase.execute({ email, password })

    return reply.status(201).send({ message: 'user successfully logged in' })

}