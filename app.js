import express from "express";
import dbConnection from "./src/db/dbConnection.js";

const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
// const product = [
//   {
//     name: "sanjay",
//     price: "12",
//   },
//   {
//     name: "bimochan",
//     price: "12",
//   },
//   {
//     name: "nischal",
//     price: "12",
//   },
// ];

dbConnection();
export default app;
