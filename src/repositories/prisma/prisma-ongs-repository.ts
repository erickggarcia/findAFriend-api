import { Prisma, Ong } from "@prisma/client";
import { OngsRepository } from "../ongs-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOngsRepository implements OngsRepository {
    async register(data: Prisma.OngUncheckedCreateInput): Promise<Ong> {
        const ong = await prisma.ong.create({ data })

        return ong
    }

    async findByEmail(email: string): Promise<Ong | null> {
        const ong = await prisma.ong.findUnique({
            where: {
                email
            }
        })

        if (!email) return null

        return ong
    }

    async fetchOngsByCityId(cityId: string, page: number = 1): Promise<Ong[]> {
        const take = 20
        const skip = (page - 1) * take
        const ongs = await prisma.ong.findMany({
            where: {
                cityId,
            },
            take,
            skip
        })

        return ongs
    }

}