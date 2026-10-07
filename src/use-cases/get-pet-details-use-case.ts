import { Ong, Pet } from "@prisma/client";
import { PetsRepository } from "@/repositories/pets-repository";
import { OngsRepository } from "@/repositories/ongs-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetPetDetailsUseCaseRequest {
    id: string
}

interface GetPetDetailsUseCaseResponse {
    pet: Pet
    ong: Pick<Ong, 'name' | 'whatsapp' | 'address' | 'zipcode'>
}

export class GetPetDetailsUseCase {
    constructor(
        private readonly petsRepository: PetsRepository,
        private readonly ongsRepository: OngsRepository,
    ) { }

    async execute({ id }: GetPetDetailsUseCaseRequest): Promise<GetPetDetailsUseCaseResponse> {
        const pet = await this.petsRepository.findById(id)

        if (!pet) {
            throw new ResourceNotFoundError()
        }

        const ong = await this.ongsRepository.findById(pet.ongId)

        if (!ong) {
            throw new ResourceNotFoundError()
        }

        const { name, whatsapp, address, zipcode } = ong

        return { pet, ong: { name, whatsapp, address, zipcode } }
    }
}
