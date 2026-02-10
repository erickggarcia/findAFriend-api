import { makeRegisterPetUseCase } from "@/use-cases/factories/make-register-pet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerPetsBodySchema = z.object({
        photoUrl: z.string(),
        name: z.string(),
        breed: z.string(),
        color: z.string(),
        age: z.number(),
        size: z.enum(['SMALL', 'MEDIUM', 'BIG']),
        details: z.string(),
        ongId: z.string()
    })

    const { photoUrl, name, breed, color, age, size, details, ongId } = registerPetsBodySchema.parse(request.body)
    const registerPetUseCase = makeRegisterPetUseCase()
    await registerPetUseCase.execute({ photoUrl, name, breed, color, age, size, details, ongId })

    return reply.status(201).send({ message: 'pet successfully registered' })
}