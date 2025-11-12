import { CitiesRepository } from "@/repositories/cities-repository"
import { StatesRepository } from "@/repositories/states-repository"
import { City } from "@prisma/client"
import { StateDoesNotExistsError } from "./errors/state-does-not-exists-error"

export interface CreateCityUseCaseRequest {
    name: string,
    stateId: string
}

export interface CreateCityUseCaseResponse {
    city: City
}

export class CreateCityUseCase {

    constructor(
        private citiesRepository: CitiesRepository,
        private statesRepository: StatesRepository
    ) { }

    async execute({ name, stateId }: CreateCityUseCaseRequest): Promise<CreateCityUseCaseResponse> {

        const state = await this.statesRepository.findStateById(stateId)

        if (!state) {
            console.log("O estado informado não existe")
            throw new StateDoesNotExistsError()
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