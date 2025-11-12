import { OngsRepository } from "@/repositories/ongs-repository"
import { Ong } from "@prisma/client"
import { InvalidCredentialsError } from "./errors/invalid-credentials-error"
import { compare } from "bcryptjs"

interface AuthenticateOngRequest {
    email: string
    password: string
}

interface AuthenticateOngResponse {
    ong: Ong
}

export class AuthenticateOngUseCase {
    constructor(private readonly ongsRepository: OngsRepository) { }

    async execute({ email, password }: AuthenticateOngRequest): Promise<AuthenticateOngResponse> {
        const ong = await this.ongsRepository.findByEmail(email)

        if (!ong) {
            console.log('E-mail ou senha inválidos')
            throw new InvalidCredentialsError()
        }

        const { password_hash } = ong
        const doesPassWordMatches = await compare(password, password_hash)

        if (!doesPassWordMatches) {
            throw new InvalidCredentialsError()
        }


        return { ong, }
    }
}