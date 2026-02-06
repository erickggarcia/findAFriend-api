import { Ong } from "@prisma/client"
import { OngsRepository } from "../repositories/ongs-repository"

interface FetchOngsByCityIdUseCaseRequest {
    cityId: string,
    page?: number
}
interface FetchOngsByCityIdUseCaseResponse {
    ongs: Ong[]
}

export class FetchOngsByCityUseCase {
    constructor(private readonly ongsRepository: OngsRepository) { }

    async execute(data: FetchOngsByCityIdUseCaseRequest): Promise<FetchOngsByCityIdUseCaseResponse> {

        const { cityId, page } = data

        const ongs = await this.ongsRepository.fetchOngsByCityId(cityId, page)
        return {
            ongs,
        }
    }
}