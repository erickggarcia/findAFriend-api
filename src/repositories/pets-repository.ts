import { Pet, Prisma, Ong } from "@prisma/client";

export interface PetsRepository {
    register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
    findById(id: string): Promise<Pet | null>
    filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>, cityId: string, page?: number): Promise<(Pet & Partial<Ong>)[] | []>
    fetchPetsByCity(cityId: string, page?: number): Promise<(Pet & Partial<Ong>)[] | []>
}