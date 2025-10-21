import { CitiesRepository } from "@/repositories/cities-repository"
import { StatesRepository } from "@/repositories/states-repository"
import { City } from "@prisma/client"

export interface CreateCityUseCaseRequest {
    name: string,
    stateName: string
}

export interface CreateCityUseCaseResponse { 
    city: City
}

export class CreateCityUseCase {

    constructor(
        private citiesRepository: CitiesRepository,
        private statesRepository: StatesRepository
    ) {}

    async execute({name, stateName}: CreateCityUseCaseRequest): Promise<CreateCityUseCaseResponse> {
        const stateId = await this.statesRepository.findStateIdByName(stateName)

        if(!stateId){
            throw new Error("State not found")
        }

        const city = await this.citiesRepository.create({
            name, 
            stateId,
        })

        return {
            city
        }
    }
}