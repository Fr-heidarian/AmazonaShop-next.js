import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

const db = drizzle(sql, { schema });
export default db;
