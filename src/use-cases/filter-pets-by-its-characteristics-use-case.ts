import { CitiesRepository } from "@/repositories/cities-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from '@prisma/client'
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";
import { OngsRepository } from "@/repositories/ongs-repository";
import { PetsDoesNotExistsError } from "./errors/pets-does-not-exists-error";

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
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
        private readonly ongsRepository: OngsRepository
    ) { }

    async execute(data: FilterPetsByItsCharacteristicsUseCaseRequest, cityId: string): Promise<FilterPetsByItsCharacteristicsUseCaseResponse> {

        const city = await this.citiesRepository.findCityById(cityId)

        if (!city) {
            console.log("A cidade informada não existe")
            throw new CityDoesNotExistsError()
        }

        const ongs = await this.ongsRepository.fetchOngsByCityId(city.id)

        if (!ongs.length) {
            console.log("Não existem pets cadastrados nessa cidade")
            throw new PetsDoesNotExistsError()
        }

        const pets = await this.petsRepository.filterPetsByCharacteristics(data, ongs)

        return {
            pets
        }
    }
}