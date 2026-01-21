import { Prisma, State } from "@prisma/client";
import { StatesRepository } from "../states-repository";
import { prisma } from "@/lib/prisma";

export class PrismaStatesRepository implements StatesRepository {
    async create(data: Prisma.StateCreateInput): Promise<State> {
        const state = await prisma.state.create({
            data
        })

        return state
    }

    async findStateById(id: string): Promise<State | null> {
        const state = await prisma.state.findUnique({
            where: {
                id
            }
        })

        if (!state) {
            return null
        }

        return state
    }

    async fetchAllStates(): Promise<State[]> {
        const states = await prisma.state.findMany()
        return states
    }

}