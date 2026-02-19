import { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole(roleToVerify: 'MEMBER' | 'ADMIN') {
    return async (Request: FastifyRequest, reply: FastifyReply) => {
        const { role } = Request.user

        if (roleToVerify !== role) {
            return reply.status(401).send({ message: 'Unauthorized' })
        }
    }
}