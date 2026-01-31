import { makeFindCitiesUseCase } from "@/use-cases/factories/make-find-city-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function find(request: FastifyRequest, reply: FastifyReply) {
    const findCityRequestParams = z.object({
        stateId: z.string()
    })

    const { stateId } = findCityRequestParams.parse(request.params)
    const findCitiesUseCase = makeFindCitiesUseCase()
    const { cities } = await findCitiesUseCase.execute({ stateId })
    return reply.status(200).send({ message: 'cities successfully found', cities })
}