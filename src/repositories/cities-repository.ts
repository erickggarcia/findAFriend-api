import { City, Prisma } from "@prisma/client";

export interface CitiesRepository {
    create(data: Prisma.CityUncheckedCreateInput): Promise<City>;
}