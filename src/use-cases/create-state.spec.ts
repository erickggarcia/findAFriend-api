import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { describe, expect, it, beforeEach } from "vitest";
import { CreateStateUseCase } from "./create-state";

let statesRepository: InMemoryStatesRepository
let sut: CreateStateUseCase

describe("register state use-case", () => {
    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        sut = new CreateStateUseCase(statesRepository)
    })

    it("should be able to create a state", async () => {
        const { state } = await sut.execute({
            name: "São Paulo"
        })

        expect(state.id).toEqual(expect.any(String))
    })
})