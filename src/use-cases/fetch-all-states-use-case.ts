import { StatesRepository } from "@/repositories/states-repository";

export class FetchAllStatesUseCase {
    constructor(private readonly statesRepository: StatesRepository) { }

    async execute() {
        const states = await this.statesRepository.fetchAllStates()
        return { states }
    }
}