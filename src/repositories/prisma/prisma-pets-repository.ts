import { Prisma, Pet, Ong } from "@prisma/client";
import { PetsRepository } from "../pets-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPetsRepository implements PetsRepository {
    async register(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
        const pet = await prisma.pet.create({ data })

        return pet
    }

    async filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>, cityId: string, page: number = 1): Promise<(Pet & Partial<Ong>)[] | []> {

        const take = 20
        const skip = (page - 1) * take

        const pets = await prisma.pet.findMany({
            where: {
                ...petCharacteristics,
                ong: {
                    cityId
                }
            },
            include: {
                ong: true
            },
            take,
            skip
        })

        return pets
    }

    async fetchPetsByCity(cityId: string, page: number = 1): Promise<(Pet & Partial<Ong>)[] | []> {
        const take = 20
        const skip = (page - 1) * take

        const pets = await prisma.pet.findMany({
            where: {
                ong: {
                    cityId
                }
            },
            include: {
                ong: true
            },
            take,
            skip
        })

        return pets
    }

}