import { randomUUID } from "node:crypto";
import { StatesRepository } from "../states-repository";
import { Prisma, State } from "@prisma/client";

export class InMemoryStatesRepository implements StatesRepository { 
    
    public states : State[] = []
    async create(data: Prisma.StateUncheckedCreateInput) {
        
        const state = {
            id: randomUUID(),
            name: data.name,
        }

        this.states.push(state)

        return state
    }

    async findStateIdByName(name: string){
        const stateId = this.states.find(state => state.name.toLowerCase().trim() === name.toLowerCase().trim())

        if(!stateId){ 
            console.log("State not found")
            return null
        }

        return stateId.id
    }

}