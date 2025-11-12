import { CitiesRepository } from "@/repositories/cities-repository";
import { OngsRepository } from "@/repositories/ongs-repository";
import { PetsRepository } from "@/repositories/pets-repository";

export class ListPetsByItsCityUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly citiesRepository: CitiesRepository,
        private readonly ongsRepository: OngsRepository
    ) { }

    async execute(cityName: string) {
        const cityId = await this.citiesRepository.findCityIdByName(cityName)
        const ongs = cityId ? await this.ongsRepository.fetchOngsAtCity(cityId) : []

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