import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from '@prisma/client'

interface FilterPetsByItsCharacteristicsUseCaseRequest {
    name?: string;
    breed?: string;
    color?: string;
    age?: number;
    size?: 'BIG' | 'MEDIUM' | 'SMALL';
}

interface FilterPetsByItsCharacteristicsUseCaseResponse {
    pets: Pet[]
}

export class FilterPetsByItsCharacteristicsUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    async execute(data: FilterPetsByItsCharacteristicsUseCaseRequest): Promise<FilterPetsByItsCharacteristicsUseCaseResponse> {
        const pets = await this.petsRepository.filterPetsByCharacteristics(data)

        return {
            pets
        }
    }
}