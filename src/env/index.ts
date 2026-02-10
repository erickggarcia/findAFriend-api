import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
    port: z.coerce.number().default(3333),
    NODE_ENV: z.enum(['DEV', 'PROD', 'TEST']).default('DEV'),
    DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('Invalid environment credentials')

    throw new Error('❌ Invalid environment credentials')
}

export const env = _env.data