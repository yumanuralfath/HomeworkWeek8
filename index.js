import express from "express";
import pool from "./config/database.js";

const port = 2070;
const app = express();

pool.connect((err, result) => {
  console.log(err);
  // console.log(result);
});

app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
