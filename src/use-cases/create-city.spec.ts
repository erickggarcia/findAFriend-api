import { InMemoryCitiesRepository } from "@/repositories/in-memory/in-memory-cities-repository";
import { InMemoryStatesRepository } from "@/repositories/in-memory/in-memory-states-repository";
import { describe, it, beforeEach, expect } from "vitest";
import { CreateCityUseCase } from "./create-city";

let statesRepository: InMemoryStatesRepository
let citiesRepository: InMemoryCitiesRepository
let sut: CreateCityUseCase

describe("create city UseCase", () => {

    beforeEach(() => {
        statesRepository = new InMemoryStatesRepository()
        citiesRepository = new InMemoryCitiesRepository()


        sut = new CreateCityUseCase(
            citiesRepository,
            statesRepository
        )
    })

    it("Should be able to create a city", async () => {
        await statesRepository.create({ name: "Rio de Janeiro", id: 'rd-id-01' })

        const { city } = await sut.execute({
            name: "Rio das Ostras",
            stateId: "rd-id-01"
        })

        expect(city.id).toEqual(expect.any(String))
    })
})