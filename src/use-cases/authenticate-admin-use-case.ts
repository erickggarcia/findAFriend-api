import { User } from "@prisma/client"
import { InvalidCredentialsError } from "./errors/invalid-credentials-error"
import { compare } from "bcryptjs"
import { UsersRepository } from "@/repositories/users-repository"

interface AuthenticateUserRequest {
    email: string
    password: string
}

interface AuthenticateUserResponse {
    user: User
}

export class AuthenticateUserUseCase {
    constructor(private readonly usersRepository: UsersRepository) { }

    async execute({ email, password }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
        const user = await this.usersRepository.findByEmail(email)

        if (!user) {
            console.log('E-mail ou senha inválidos')
            throw new InvalidCredentialsError()
        }

        const { password_hash } = user
        const doesPassWordMatches = await compare(password, password_hash)

        if (!doesPassWordMatches) {
            throw new InvalidCredentialsError()
        }


        return { user, }
    }
}