import { StatesRepository } from "@/repositories/states-repository";
import { State } from "@prisma/client";
import { StateDoesNotExistsError } from "./errors/state-does-not-exists-error";

interface FindStateUseCaseRequest {
    id: string
}

interface FindStateUseCaseResponse {
    state: State
}

export class FindStateUseCase {
    constructor(private readonly statesRepository: StatesRepository) { }

    async execute(data: FindStateUseCaseRequest): Promise<FindStateUseCaseResponse> {
        const { id } = data
        const state = await this.statesRepository.findStateById(id)

        if (!state) {
            throw new StateDoesNotExistsError()
        }

        return {
            state
        }
    }
}