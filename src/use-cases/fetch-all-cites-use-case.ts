import { CitiesRepository } from "@/repositories/cities-repository";

export class fetchAllCitiesUseCase {
    constructor(private readonly citiesRepository: CitiesRepository) { }

    async execute() {
        const cities = await this.citiesRepository.fetchAllCities()
        return { cities }
    }
}