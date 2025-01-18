import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { config } from 'dotenv';
config({ path: ".env" });

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

