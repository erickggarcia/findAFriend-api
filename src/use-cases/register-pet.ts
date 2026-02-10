import { PetsRepository } from "@/repositories/pets-repository";
import { Pet } from "@prisma/client";

interface RegisterPetUseCaseRequest {
    photoUrl: string;
    name: string;
    breed: string;
    color: string;
    age: number;
    size: 'SMALL' | 'MEDIUM' | 'BIG';
    details: string;
    ongId: string
}

interface RegisterPetsUseCaseResponse {
    pet: Pet
}


export class RegisterPetUseCase {
    constructor(private readonly petsRepository: PetsRepository) { }

    async execute(data: RegisterPetUseCaseRequest): Promise<RegisterPetsUseCaseResponse> {
        const pet = await this.petsRepository.register(data)

        return { pet }
    }
}