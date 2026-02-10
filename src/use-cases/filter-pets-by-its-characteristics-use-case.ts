import { CitiesRepository } from "@/repositories/cities-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from '@prisma/client'
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";

interface FilterPetsByItsCharacteristicsUseCaseRequest {
    name?: string;
    breed?: string;
    color?: string;
    age?: number;
    size?: 'BIG' | 'MEDIUM' | 'SMALL';
    cityId: string,
    page?: number;
}

interface FilterPetsByItsCharacteristicsUseCaseResponse {
    pets: Pet[]
}

export class FilterPetsByItsCharacteristicsUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
    ) { }

    async execute(data: FilterPetsByItsCharacteristicsUseCaseRequest): Promise<FilterPetsByItsCharacteristicsUseCaseResponse> {
        const { cityId, page, ...characteristics } = data

        const city = await this.citiesRepository.findCityById(cityId)

        if (!city) {
            console.log("A cidade informada não existe")
            throw new CityDoesNotExistsError()
        }

        const pets = await this.petsRepository.filterPetsByCharacteristics(characteristics, cityId, page)

        return {
            pets
        }
    }
}