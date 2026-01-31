import { makeCreateCityUseCase } from "@/use-cases/factories/make-create-city-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createCityRequestBody = z.object({
        name: z.string(),
        stateId: z.string()
    })

    const { name, stateId } = createCityRequestBody.parse(request.body)

    const createCityUseCase = makeCreateCityUseCase()
    await createCityUseCase.execute({ name, stateId })

    return reply.status(201).send({ message: 'city created successfully' })
}