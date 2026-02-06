import { makeRegisterOngUseCase } from "@/use-cases/factories/make-register-ong-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerOngSchemaBody = z.object({
        name: z.string(),
        socialReason: z.string(),
        photoUrl: z.string(),
        cnpj: z.string(),
        whatsapp: z.string(),
        email: z.email(),
        password: z.string(),
        address: z.string(),
        zipcode: z.string(),
        cityId: z.string()
    })

    const { photoUrl, name, socialReason, cnpj, whatsapp, email, password, address, zipcode, cityId } = registerOngSchemaBody.parse(request.body)

    const registerOngUseCase = makeRegisterOngUseCase()

    await registerOngUseCase.execute({ photoUrl, name, socialReason, cnpj, whatsapp, email, password, address, zipcode, cityId })

    return reply.status(201).send({ message: 'ong successfully registered' })

}