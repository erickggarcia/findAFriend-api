import { CitiesRepository } from "@/repositories/cities-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";

export class ListPetsByItsCityUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
    ) { }

    async execute(cityId: string, page?: number) {
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