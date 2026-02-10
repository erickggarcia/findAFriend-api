import { makeFilterPetsByItsCharacteristicsUseCase } from "@/use-cases/factories/make-filter-pets-by-its-characteristics-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function filter(request: FastifyRequest, reply: FastifyReply) {
    const filterPetsQuerySchema = z.object({
        breed: z.string(),
        color: z.string(),
        age: z.number(),
        size: z.enum(['SMALL', 'MEDIUM', 'BIG']),
        page: z.number().optional()
    })

    const filterPetsParamsSchema = z.object({
        cityId: z.string(),
    })

    const { breed, color, age, size, page } = filterPetsQuerySchema.parse(request.query)
    const { cityId } = filterPetsParamsSchema.parse(request.params)

    const filterPetsByItsCharacteristicsUseCase = makeFilterPetsByItsCharacteristicsUseCase()
    const { pets } = await filterPetsByItsCharacteristicsUseCase.execute({ breed, color, age, size, cityId, page })

    return reply.status(200).send({ message: 'Pets found successfully', pets })
}