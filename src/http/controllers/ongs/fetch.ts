import { makefetchOngsByCityUseCase } from "@/use-cases/factories/make-fetch-ongs-by-city-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function fetchOngsByCity(request: FastifyRequest, reply: FastifyReply) {
    const fetchOngsByCityQueryParamsSchema = z.object({
        cityId: z.string(),
        page: z.number().optional()
    })

    const { cityId, page } = fetchOngsByCityQueryParamsSchema.parse(request.query)
    const fetchOngsByCityUseCase = makefetchOngsByCityUseCase()

    const { ongs } = await fetchOngsByCityUseCase.execute({ cityId, page })
    return reply.status(200).send({ message: 'ongs retrived successfully', ongs })
}