import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeGetUserProfileUseCase } from "@/use-cases/factories/make-get-user-profile-use-case";
import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify/types/request";

export async function profile(request: FastifyRequest, reply: FastifyReply) {
    const getUserProfile = makeGetUserProfileUseCase()
    try {
        const { user } = await getUserProfile.execute({ id: request.user.sub })
        return reply.status(200).send({ ...user, password_hash: undefined })
    } catch (err) {
        if (err instanceof ResourceNotFoundError) {
            return reply.status(400).send({ message: err.message })
        }
    }
}