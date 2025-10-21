import { Prisma, Ong } from "@prisma/client";
import { OngsRepository } from "../ongs-repository";
import { randomUUID } from "node:crypto";

export class InMemoryOngsRepository implements OngsRepository {
    private ongs: Ong[] = [];

    async create(data: Prisma.OngUncheckedCreateInput) {
        const ong = {
                id: randomUUID(),
                photoUrl: data.photoUrl || null,
                name:data.name,
                socialReason: data.socialReason,
                cnpj: data.cnpj,
                whatsapp: data.whatsapp,
                email: data.email,
                password_hash: data.password_hash,
                address: data.address,
                zipcode: data.zipcode,
                created_at: new Date(),
                updated_at: null,
                role: data.role ?? "MEMBER",
                cityId: data.cityId,
            }

        this.ongs.push(ong);

        return ong
    }
}