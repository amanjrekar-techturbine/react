import { Pool } from "pg";

let pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Tech1mini",
    port: 5433,
    database: "demodb"
})

export default pool;