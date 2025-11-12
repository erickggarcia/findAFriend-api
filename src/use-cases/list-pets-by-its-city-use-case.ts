import { CitiesRepository } from "@/repositories/cities-repository";
import { OngsRepository } from "@/repositories/ongs-repository";
import { PetsRepository } from "@/repositories/pets-repository";
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";

export class ListPetsByItsCityUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
        private readonly ongsRepository: OngsRepository
    ) { }

    async execute(cityId: string) {
        const city = await this.citiesRepository.findCityById(cityId)

        if (!city) {
            console.log("A cidade informada não existe")
            throw new CityDoesNotExistsError()
        }
        const ongs = await this.ongsRepository.fetchOngsByCityId(cityId)

        if (ongs.length > 0) {
            const ongsId = ongs.map((ong) => {
                return ong.id
            })
            const pets = await this.petsRepository.fetchPetsByCity(ongsId)
            return {
                pets
            }
        }
        return {
            pets: []
        }
    }
}