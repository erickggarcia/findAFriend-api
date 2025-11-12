import { randomUUID } from "node:crypto";
import { StatesRepository } from "../states-repository";
import { Prisma, State } from "@prisma/client";

export class InMemoryStatesRepository implements StatesRepository {

    public states: State[] = []
    async create(data: Prisma.StateUncheckedCreateInput) {

        const state = {
            id: data.id ?? randomUUID(),
            name: data.name,
        }

        this.states.push(state)

        return state
    }

    async findStateById(id: string) {
        const state = this.states.find(state => state.id === id)

        if (!state) {
            console.log("State not found");
            return null
        }

        return state
    }

    async fetchAllStates() {
        return this.states
    }

}