import { Pet, Prisma, Ong } from "@prisma/client";

export interface PetsRepository {
    register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
    filterPetsByCharacteristics(petCharacteristics: Partial<Prisma.PetUncheckedCreateInput>, ongs: Ong[]): Promise<(Pet & Partial<Ong>)[] | []>
    fetchPetsByCity(ongs: Ong[]): Promise<(Pet & Partial<Ong>)[] | []>
}