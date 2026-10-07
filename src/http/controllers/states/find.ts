import { StateDoesNotExistsError } from "@/use-cases/errors/state-does-not-exists-error";
import { makeFindStateUseCase } from "@/use-cases/factories/make-find-state-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function find(request: FastifyRequest, reply: FastifyReply) {
    const findStateRequesParamsSchema = z.object({
        id: z.string()
    })

    const { id } = findStateRequesParamsSchema.parse(request.params)
    const findStateUseCase = makeFindStateUseCase()

    try {
        const { state } = await findStateUseCase.execute({ id })

        return reply.status(200).send({ message: 'state successfully found', state })
    } catch (err) {
        if (err instanceof StateDoesNotExistsError) {
            return reply.status(404).send({ message: err.message })
        }

        throw err
    }
}