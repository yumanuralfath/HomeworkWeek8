import express from "express";
import pool from "./config/database.js";

const port = 2070;
const app = express();

pool.connect();


app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
