import express from "express";
import dbConnection from "./src/db/dbConnection.js";
import dotenv from "dotenv";
import user from "./src/routes/user.routes.js";
import doctor from "./src/routes/doctor.routes.js";
import appointment from "./src/routes/appointment.routes.js";
import disease from "./src/routes/disease.routes.js ";
import report from "./src/routes/report.routes.js";

const app = express();
const port = 4000;

dotenv.config();

app.use("/user", user);
app.use("/doctor", doctor);
app.use("/disease", disease);
app.use("/appointment", appointment);
app.use("/report", report);

app.use(express.json());

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

dbConnection();
export default app;
