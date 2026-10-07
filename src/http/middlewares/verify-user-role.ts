import { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole(roleToVerify: 'ADMIN' | 'ONG') {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        const { role } = request.user

        if (roleToVerify !== role) {
            return reply.status(403).send({ message: 'Forbidden' })
        }
    }
}
