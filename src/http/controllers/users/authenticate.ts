import { makeAuthenticateUserUseCase } from "@/use-cases/factories/make-authenticate-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateUserBodySchema = z.object({
        email: z.email(),
        password: z.string().min(6),
    })

    const { email, password } = authenticateUserBodySchema.parse(request.body)

    const registerOngUseCase = makeAuthenticateUserUseCase()

    const { user } = await registerOngUseCase.execute({ email, password })

    return reply.status(200).send({ message: 'user successfully logged in' })
}