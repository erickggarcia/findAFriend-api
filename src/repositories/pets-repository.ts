import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository {
    register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
    filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>): Promise<Pet[]>
    fetchPetsByCity(ongsId: string[]): Promise<Pet[] | []>
}