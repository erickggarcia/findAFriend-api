import { makeCreateStateUseCase } from "@/use-cases/factories/make-create-state-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createStateBodySchema = z.object({
        name: z.string(),
        uf: z.string().length(2).toUpperCase()
    })

    const { name, uf } = createStateBodySchema.parse(request.body)

    const createStateUseCase = makeCreateStateUseCase()
    await createStateUseCase.execute({ name, uf })
    return reply.status(201).send({ message: "state registered successfully" })
}