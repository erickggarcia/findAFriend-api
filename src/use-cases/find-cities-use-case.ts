import { CitiesRepository } from "@/repositories/cities-repository";
import { City } from "@prisma/client";

interface FindCitiesUseCaseRequest {
    stateId: string
}


interface FindCitiesUseCaseResponse {
    cities: City[]
}

export class FindCitiesUseCase {
    constructor(private readonly citiesRepository: CitiesRepository) { }

    async execute(data: FindCitiesUseCaseRequest): Promise<FindCitiesUseCaseResponse> {
        const { stateId } = data
        const cities = await this.citiesRepository.findCitiesByStateId(stateId)

        return { cities }
    }
}