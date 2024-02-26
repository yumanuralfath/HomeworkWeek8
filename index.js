import express from "express";
import pool from "./config/database.js";
import router from "./router/route.js";
import "dotenv";

const port = process.env.port || 2070;
const app = express();

app.use(router);

pool.connect((err, result) => {
  if (err) return console.log(err);
  console.log("Database connected");
});

app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
