import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://Expenses-Tracker_owner:pZGW6usArJ7w@ep-nameless-boat-a5honwxv.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require');
export const db = drizzle(sql, { schema });