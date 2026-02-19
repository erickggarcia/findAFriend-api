import { StatesRepository } from "@/repositories/states-repository"
import { State } from "@prisma/client"

interface CreateStateUseCaseRequest {
    name: string
    uf: string
}

interface CreateStateUseCaseResponse {
    state: State
}


export class CreateStateUseCase {

    constructor(private statesRepository: StatesRepository) { }

    async execute({ name, uf }: CreateStateUseCaseRequest): Promise<CreateStateUseCaseResponse> {

        const state = await this.statesRepository.create({
            name,
            uf
        })

        return {
            state,
        }
    }
}