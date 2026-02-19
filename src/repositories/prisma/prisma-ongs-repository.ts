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

    async fetchOngsByCityId(cityId: string): Promise<Ong[]> {
        const ongs = await prisma.ong.findMany({
            where: {
                cityId,
            },
        })

        return ongs
    }

    async findById(id: string): Promise<Ong | null> {
        const ong = await prisma.ong.findUnique({
            where: {
                id
            }
        })

        if (!ong) return null

        return ong
    }

}