import { Prisma, State } from "@prisma/client";

export interface StatesRepository {
    create(data: Prisma.StateCreateInput): Promise<State>
    findStateById(id: string): Promise<State | null>
}