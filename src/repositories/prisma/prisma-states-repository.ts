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

    async findStateIdByName(name: string): Promise<State["id"] | null> {
        throw new Error("Method not implemented.");
    }

}