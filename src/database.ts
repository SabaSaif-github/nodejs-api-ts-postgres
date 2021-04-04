import { Pool } from 'pg'

export const pool = new Pool({
    user: 'sabasaif',
    host: 'localhost',
    password: '',
    database: 'firstapi',
    port: 5432
})