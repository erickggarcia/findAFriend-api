import { Prisma, Pet, Ong } from "@prisma/client";
import { PetsRepository } from "../pets-repository";
import { randomUUID } from "crypto";
import { InMemoryOngsRepository } from "./in-memory-ongs-repository";

export class InMemoryPetsRepository implements PetsRepository {
    constructor(private readonly ongsRepository: InMemoryOngsRepository) { }
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

    async filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>, cityId: string, page: number = 1) {

        const ongs = await this.ongsRepository.fetchOngsByCityId(cityId)

        if (!ongs.length) {
            return []
        }

        const pets = this.pets.filter((pet) => {
            const matches = Object.entries(petCharacteristics).every(([key, value]) => {
                if (value === undefined || value === null) return true
                return pet[key as keyof Pet] === value
            })

            return matches
        })
            .map((pet) => {
                const ong = ongs.find(ong => ong.id === pet.ongId)!

                return {
                    ...pet,
                    whatsapp: ong.whatsapp,
                    address: ong.address,
                    zipcode: ong.zipcode,
                }
            }).slice((page - 1) * 20, page * 20)


        return pets

    }

    async fetchPetsByCity(cityId: string, page: number = 1) {
        const ongs = await this.ongsRepository.fetchOngsByCityId(cityId)

        if (!ongs.length) {
            return []
        }
        const petsFoundAtCity: (Pet & Partial<Ong>)[] = []

        for (let i = 0; i < this.pets.length; i++) {
            const matchingOng = ongs.find(ong => ong.id === this.pets[i].ongId)
            if (matchingOng) {
                const petsAdoptionInformation = {
                    ... this.pets[i],
                    whatsapp: matchingOng.whatsapp,
                    address: matchingOng.address,
                    zipcode: matchingOng.zipcode
                }

                petsFoundAtCity.push(petsAdoptionInformation)
            }
        }
        return petsFoundAtCity.slice((page - 1) * 20, page * 20)
    }
}