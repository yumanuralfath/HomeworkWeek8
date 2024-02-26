import pool from "../config/database.js";
import fs from "fs";

const seedQuery = fs.readFileSync("Database/seeding.sql", "utf8");
await pool.query(seedQuery, (error, response) => {
  if (error) return console.log(error);
  console.log(response);
  console.log("Seeding has been completed");
  pool.end();
});
