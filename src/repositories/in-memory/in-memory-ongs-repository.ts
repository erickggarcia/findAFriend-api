import { Prisma, Ong } from "@prisma/client";
import { OngsRepository } from "../ongs-repository";
import { randomUUID } from "node:crypto";

export class InMemoryOngsRepository implements OngsRepository {
    private ongs: Ong[] = [];

    async register(data: Prisma.OngUncheckedCreateInput) {
        const ong = {
                id: data.id ?? randomUUID(),
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

    async findByEmail(email: string) {
        const userAlreadyExists = this.ongs.find(ong => ong.email === email)

       if(!userAlreadyExists) { 
        return null
       }

       return userAlreadyExists
     }

     async fetchOngsAtCity(cityId: string) {
        const ongs = this.ongs.filter(ong => ong.cityId === cityId)

       return ongs
     }
}