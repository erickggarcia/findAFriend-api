import { CitiesRepository } from "@/repositories/cities-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";
import { Pet } from "@prisma/client";

interface ListPetsByItsCityRequest {
    cityId: string
    page?: number
}

interface ListPetsByItsCityResponse {
    pets: Pet[]
}

export class ListPetsByItsCityUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
    ) { }

    async execute(data: ListPetsByItsCityRequest): Promise<ListPetsByItsCityResponse> {
        const { cityId, page } = data
        const city = await this.citiesRepository.findCityById(cityId)

        if (!city) {
            console.log("A cidade informada não existe")
            throw new CityDoesNotExistsError()
        }

        const pets = await this.petsRepository.fetchPetsByCity(cityId, page)
        return {
            pets
        }
    }
}