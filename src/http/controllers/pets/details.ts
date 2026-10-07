import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetPetDetailsUseCase } from "@/use-cases/factories/make-get-pet-details-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function details(request: FastifyRequest, reply: FastifyReply) {
    const petDetailsParamsSchema = z.object({
        id: z.string()
    })

    const { id } = petDetailsParamsSchema.parse(request.params)

    try {
        const getPetDetailsUseCase = makeGetPetDetailsUseCase()
        const { pet, ong } = await getPetDetailsUseCase.execute({ id })

        return reply.status(200).send({ pet, ong })
    } catch (err) {
        if (err instanceof ResourceNotFoundError) {
            return reply.status(404).send({ message: err.message })
        }

        throw err
    }
}
