import { Prisma, City } from "@prisma/client";
import { CitiesRepository } from "../cities-repository";
import { prisma } from "@/lib/prisma";

export class PrismaCitiesRepository implements CitiesRepository {
    async create(data: Prisma.CityUncheckedCreateInput): Promise<City> {
        const city = await prisma.city.create({ data });

        return city
    }

    async findCityById(id: string): Promise<City | null> {

        const city = await prisma.city.findUnique({
            where: {
                id,
            }
        })

        if (!city) return null

        return city
    }


    async fetchAllCities(id: string): Promise<City[] | []> {
        const cities = await prisma.city.findMany()
        return cities
    }

}