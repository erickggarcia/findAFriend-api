import { Prisma, Pet } from "@prisma/client";
import { PetsRepository } from "../pets-repository";
import { randomUUID } from "crypto";

export class InMemoryPetsRepository implements PetsRepository {
    private pets: Pet[] = []

    async register(data: Prisma.PetUncheckedCreateInput) {
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

    async filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>) {

        if (!Object.keys(petCharacteristics).length) {
            return this.pets
        }

        const pets = this.pets.filter((pet) => {
            return Object.entries(petCharacteristics).every(([key, value]) => {
                if (value === undefined || value === null) return true

                return pet[key as keyof Pet] === value
            })
        })

        return pets
    }

    async fetchPetsByCity(ongsIds: string[]) {

        if (!ongsIds.length) {
            return []
        }
        const petsFoundAtCity = []

        for (let i = 0; i < this.pets.length; i++) {
            if (ongsIds.includes(this.pets[i].ongId)) {
                petsFoundAtCity.push(this.pets[i])
            } else {
                continue
            }
        }

        return petsFoundAtCity

    }
}