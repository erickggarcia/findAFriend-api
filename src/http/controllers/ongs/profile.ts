import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetOngProfileUseCase } from "@/use-cases/factories/make-get-ong-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply) {
    const getOngProfile = makeGetOngProfileUseCase()
    try {
        const { ong } = await getOngProfile.execute({ id: request.user.sub })
        return reply.status(200).send({ ...ong, password_hash: undefined })
    } catch (err) {
        if (err instanceof ResourceNotFoundError) {
            return reply.status(400).send({ message: err.message })
        }
    }
}