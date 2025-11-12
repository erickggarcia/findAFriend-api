import { City, Prisma } from "@prisma/client";
import { CitiesRepository } from "../cities-repository";
import { randomUUID } from "node:crypto";

export class InMemoryCitiesRepository implements CitiesRepository {

    private cities: City[] = [];

    async create(data: Prisma.CityUncheckedCreateInput): Promise<City> {

        const city = {
            id: data.id ?? randomUUID(),
            name: data.name,
            stateId: data.stateId,
        }

        this.cities.push(city);

        return city;
    }

    async findCityById(id: string) {
        const city = this.cities.find(city => city.id === id)

        if (!city) {
            return null
        }

        return city
    }

    async fetchAllCities() {
        return this.cities
    }

}