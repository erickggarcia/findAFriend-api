import { CitiesRepository } from "@/repositories/cities-repository";
import { OngsRepository } from "@/repositories/ongs-repository";
import { Ong } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { CityDoesNotExistsError } from "./errors/city-does-not-exists-error";


interface RegisterOngUseCaseRequest {
    cityId: string;
    photoUrl: string | null;
    name: string;
    socialReason: string;
    cnpj: string;
    whatsapp: string;
    email: string;
    password: string;
    address: string;
    zipcode: string;
    role?: "MEMBER" | "ADMIN";
}

interface RegisterOngUseCaseResponse {
    ong: Ong
}

export class RegisterOngUseCase {
    constructor(private ongsRepository: OngsRepository, private citiesRepository: CitiesRepository) { }

    async execute({ photoUrl, name, socialReason,
        cnpj, whatsapp, email, password, address,
        zipcode, cityId }: RegisterOngUseCaseRequest): Promise<RegisterOngUseCaseResponse> {

        const userWithSameEmail = await this.ongsRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const city = await this.citiesRepository.findCityById(cityId)

        if (!city) {
            console.log("A cidade informada não existe")
            throw new CityDoesNotExistsError()
        }

        const password_hash = await bcryptjs.hash(password, 6);

        const ong = await this.ongsRepository.register({
            photoUrl,
            name,
            socialReason,
            cnpj,
            whatsapp,
            email,
            password_hash,
            address,
            zipcode,
            cityId,
        });

        return { ong };
    }
}