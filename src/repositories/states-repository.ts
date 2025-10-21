import { Prisma, State } from "@prisma/client";

export interface StatesRepository {
    create(data: Prisma.StateCreateInput) : Promise<State>
    findStateIdByName(name: string): Promise<State["id"] | null>
}