import { makeFetchPetsByCityUseCase } from "@/use-cases/factories/make-fetch-pets-by-city-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
    const fetchPetsQuerySchema = z.object({
        page: z.number().optional()
    })
    const fetchPetsParmsSchema = z.object({
        cityId: z.string()
    })
    const { page } = fetchPetsQuerySchema.parse(request.query)
    const { cityId } = fetchPetsParmsSchema.parse(request.params)

    const fetchPetsByCityUseCase = makeFetchPetsByCityUseCase()
    const { pets } = await fetchPetsByCityUseCase.execute({ cityId, page })

    return reply.status(200).send({ message: 'Pets found successfully', pets })
}