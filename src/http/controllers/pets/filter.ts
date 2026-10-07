import { CityDoesNotExistsError } from "@/use-cases/errors/city-does-not-exists-error";
import { makeFilterPetsByItsCharacteristicsUseCase } from "@/use-cases/factories/make-filter-pets-by-its-characteristics-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function filter(request: FastifyRequest, reply: FastifyReply) {
    const filterPetsQuerySchema = z.object({
        breed: z.string().optional(),
        color: z.string().optional(),
        age: z.coerce.number().int().optional(),
        size: z.enum(['SMALL', 'MEDIUM', 'BIG']).optional(),
        page: z.coerce.number().int().min(1).optional()
    })

    const filterPetsParamsSchema = z.object({
        cityId: z.string(),
    })

    const { breed, color, age, size, page } = filterPetsQuerySchema.parse(request.query)
    const { cityId } = filterPetsParamsSchema.parse(request.params)

    try {
        const filterPetsByItsCharacteristicsUseCase = makeFilterPetsByItsCharacteristicsUseCase()
        const { pets } = await filterPetsByItsCharacteristicsUseCase.execute({ breed, color, age, size, cityId, page })

        return reply.status(200).send({ message: 'Pets found successfully', pets })
    } catch (err) {
        if (err instanceof CityDoesNotExistsError) {
            return reply.status(404).send({ message: err.message })
        }

        throw err
    }
}
