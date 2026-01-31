import { makeFindStateUseCase } from "@/use-cases/factories/make-find-state-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function find(request: FastifyRequest, reply: FastifyReply) {
    const findStateRequesParamsSchema = z.object({
        id: z.string()
    })

    const { id } = findStateRequesParamsSchema.parse(request.params)
    const findStateUseCase = makeFindStateUseCase()

    const { state } = await findStateUseCase.execute({ id })

    return reply.status(200).send({ message: 'state successfully found', state })
}