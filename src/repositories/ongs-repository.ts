import { Prisma, Ong } from "@prisma/client"

export interface OngsRepository {
    register(data: Prisma.OngUncheckedCreateInput): Promise<Ong>
    findByEmail(email: string): Promise<Ong | null>
}