import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeAuthenticateOngUseCase } from "@/use-cases/factories/make-authenticate-ong-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateOngBodySchema = z.object({
        email: z.email(),
        password: z.string(),

    })

    const { email, password } = authenticateOngBodySchema.parse(request.body)

    try {

        const registerOngUseCase = makeAuthenticateOngUseCase()

        const { ong } = await registerOngUseCase.execute({ email, password })

        const token = await reply.jwtSign({
            sub: ong.id,
        })

        const refreshToken = await reply.jwtSign({
            sub: ong.id,
        }, {
            expiresIn: '7d',
        })

        return reply
            .setCookie('refreshToken', refreshToken, {
                path: '/',
                secure: true,
                sameSite: true,
                httpOnly: true,
            })
            .status(200).send({ token })
    } catch (err) {
        if (err instanceof InvalidCredentialsError) {
            return reply.status(400).send({ message: err.message })
        }
    }
}