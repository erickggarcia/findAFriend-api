import { Ong } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { OngsRepository } from "@/repositories/ongs-repository";

interface GetOngProfileUseCaseRequest {
    id: string
}

interface GetOngProfileUseCaseResponse {
    ong: Ong
}

export class GetOngProfileUseCase {
    constructor(private readonly ongsRepository: OngsRepository) { }

    async execute({ id }: GetOngProfileUseCaseRequest): Promise<GetOngProfileUseCaseResponse> {
        const ong = await this.ongsRepository.findById(id)

        if (!ong) {
            throw new ResourceNotFoundError()
        }

        return { ong }
    }
}