import express from "express";
import pool from "./config/database.js";

const port = 2070;
const app = express();

pool.connect((err, result) => {
  if (err) return console.log(err);
  console.log("Database connected");
});

app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
