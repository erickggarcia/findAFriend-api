import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createAndAuthenticateUserOrOng } from "@/utils/test/create-and-authenticate-user-or-ong";

describe('authenticate user e2e', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('Should be able to authenticate a user', async () => {
        const { token } = await createAndAuthenticateUserOrOng(app, 'USER')

        expect(token).toEqual(expect.any(String))
    })
})