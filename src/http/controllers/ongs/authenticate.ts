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

    const token = await reply.jwtSign({
        sign: {
            sub: ong.id,
        }
    })

    const refreshToken = await reply.jwtSign({
        sign: {
            sub: ong.id,
        },
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
}