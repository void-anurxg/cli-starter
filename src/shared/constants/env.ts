import { z } from 'zod';

import { config } from 'dotenv';
config();

export const appEnv = z
    .object({
        APP_NAME: z.string(),
        APP_PORT: z.string().transform((x) => parseInt(x)),
        APP_ADDRESS: z.string(),
        APP_ENV: z.enum(['development', 'staging', 'production']).default('development'),
        AUTH_URL: z.string().url(),
        DATABASE_URL: z.string().url().optional(),
        USE_LOCAL_DB: z
            .string()
            .default('false')
            .transform((x) => x == 'true'),
        STORAGE_CONTAINER: z.string(),
    })
    .parse(process.env);
