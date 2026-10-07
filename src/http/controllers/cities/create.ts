import { StateDoesNotExistsError } from "@/use-cases/errors/state-does-not-exists-error";
import { makeCreateCityUseCase } from "@/use-cases/factories/make-create-city-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createCityRequestBody = z.object({
        name: z.string(),
        stateId: z.string()
    })

    const { name, stateId } = createCityRequestBody.parse(request.body)

    try {
        const createCityUseCase = makeCreateCityUseCase()
        await createCityUseCase.execute({ name, stateId })

        return reply.status(201).send({ message: 'city created successfully' })
    } catch (err) {
        if (err instanceof StateDoesNotExistsError) {
            return reply.status(404).send({ message: err.message })
        }

        throw err
    }
}