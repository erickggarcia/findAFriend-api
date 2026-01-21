import { Ong } from "@prisma/client"
import { OngsRepository } from "../repositories/ongs-repository"

interface FetchOngsByCityIdUseCaseResponse {
    ongs: Ong[]
}

export class FetchOngsByCityIdUseCase {
    constructor(private readonly ongsRepository: OngsRepository) { }

    async execute(cityId: string, page?: number): Promise<FetchOngsByCityIdUseCaseResponse> {

        const ongs = await this.ongsRepository.fetchOngsByCityId(cityId, page)
        return {
            ongs,
        }
    }
}