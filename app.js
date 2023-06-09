import express from "express";
import dbConnection from "./src/db/dbConnection.js";
import { Router } from "express";
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

dbConnection();
export default app;
