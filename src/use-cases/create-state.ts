import { StatesRepository } from "@/repositories/states-repository"
import { State } from "@prisma/client"

interface CreateStateUseCaseRequest {
    name: string
}

interface CreateStateUseCaseResponse {
    state: State
}


export class CreateStateUseCase {

    constructor(private statesRepository: StatesRepository) {}

    async execute ({ name }: CreateStateUseCaseRequest): Promise<CreateStateUseCaseResponse> {

        const state = await this.statesRepository.create({
            name,
        })

        return {
            state,
        }
    }
}