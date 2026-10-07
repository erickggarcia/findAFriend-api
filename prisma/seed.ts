import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { z } from 'zod'

const seedEnvSchema = z.object({
    ADMIN_NAME: z.string().default('Admin'),
    ADMIN_LAST_NAME: z.string().default('FindAFriend'),
    ADMIN_EMAIL: z.email(),
    ADMIN_PASSWORD: z.string().min(6),
})

const prisma = new PrismaClient()

async function main() {
    const { ADMIN_NAME, ADMIN_LAST_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = seedEnvSchema.parse(process.env)

    await prisma.user.upsert({
        where: { email: ADMIN_EMAIL },
        update: {},
        create: {
            name: ADMIN_NAME,
            lastName: ADMIN_LAST_NAME,
            email: ADMIN_EMAIL,
            password_hash: await hash(ADMIN_PASSWORD, 6),
        },
    })

    console.log(`Admin ${ADMIN_EMAIL} ready`)
}

main()
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
