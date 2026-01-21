import { CitiesRepository } from "@/repositories/cities-repository";

export class FindCitiesByStateIdUseCase {
    constructor(private readonly citiesRepository: CitiesRepository) { }

    async execute(id: string) {
        const cities = await this.citiesRepository.findCitiesByStateId(id)
        return { cities }
    }
}