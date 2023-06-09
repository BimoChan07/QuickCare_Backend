import express from "express";
import dbConnection from "./src/db/dbConnection.js";
import user from "./src/routes/user.routes.js";
import doctor from "./src/routes/doctor.routes.js";

const app = express();
const port = 4000;
app.use("/user", user);
app.use("/doctor", doctor);
app.use(express.json());
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

dbConnection();
export default app;
