import { User } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { UsersRepository } from "@/repositories/users-repository";


interface RegisterUserUseCaseRequest {
    name: string
    lastName: string
    email: string
    password: string
    role?: 'ADMIN'
}

interface RegisterUserUseCaseResponse {
    user: User
}

export class RegisterUserUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ name, lastName, email, password }: RegisterUserUseCaseRequest): Promise<RegisterUserUseCaseResponse> {

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }
        const password_hash = await bcryptjs.hash(password, 6);

        const user = await this.usersRepository.register({ name, lastName, email, password_hash });

        return { user };
    }
}