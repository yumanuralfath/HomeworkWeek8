import Pool from "pg-pool";

const pool = new Pool({
  user: "yumana",
  host: "localhost",
  database: "homework8dvd",
  password: "yumakeren",
  port: "5432",
});

export default pool;
