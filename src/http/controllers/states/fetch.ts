import { makeFetchAllStatesUseCase } from "@/use-cases/factories/make-fetch-all-states-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function fetch(_: FastifyRequest, reply: FastifyReply) {
    const fetchAllStatesUseCase = makeFetchAllStatesUseCase()
    const { states } = await fetchAllStatesUseCase.execute()

    return reply.status(200).send({ message: 'states found successfully', states })
}