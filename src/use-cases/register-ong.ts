import { CitiesRepository } from "@/repositories/cities-repository";
import { OngsRepository } from "@/repositories/ongs-repository";
import { Ong } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";


interface RegisterOngUseCaseRequest {
    cityName: string;
    photoUrl: string | null;
    name: string;
    socialReason: string;
    cnpj: string;
    whatsapp: string;
    email: string;
    password: string;
    address: string;
    zipcode: string;
    role: "MEMBER" | "ADMIN";
}

interface RegisterOngUseCaseResponse {
    ong: Ong
}

export class RegisterOngUseCase {
    constructor(private ongsRepository: OngsRepository, private citiesRepository: CitiesRepository) {}

    async execute({photoUrl, name, socialReason, 
        cnpj, whatsapp, email, password, address, 
        zipcode, cityName, role}: RegisterOngUseCaseRequest): Promise<RegisterOngUseCaseResponse>  {

        const userWithSameEmail = await this.ongsRepository.findByEmail(email)

        if(userWithSameEmail) {
            throw new Error("Email already in use.")
        }

        const cityId = await this.citiesRepository.findCityIdByName(cityName)

        if(!cityId) {
            throw new UserAlreadyExistsError()
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
            role: role ?? "MEMBER",
        });

        return { ong }; 
    }
}