import { Prisma, Pet } from "@prisma/client";
import { PetsRepository } from "../pets-repository";
import { randomUUID } from "crypto";

export class InMemoryPetsRepository implements PetsRepository {
    private pets: Pet[] = []

    async register (data:Prisma.PetUncheckedCreateInput) {
        const pet = {
            id: data.id ?? randomUUID(),       
            photoUrl: data.photoUrl,
            name: data.name,
            breed: data.breed,
            color: data.color,
            age: data.age,
            size: data.size,
            details: data.details,
            created_at: new Date(),
            updated_at: null,
            ongId: data.ongId ?? randomUUID(),
        }

        this.pets.push(pet)

        return pet
    }
}