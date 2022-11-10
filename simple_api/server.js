import express from "express";
import bodyParser from "body-parser";
import router from "./src/index.js";
import { database, initPostgresConnection } from "./src/database.js";
import { seed } from "./src/seed.js";
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, async function (err) {
  if (err) {
    console.log(err);
    throw err;
  }
  await initPostgresConnection(true, database);
  seed();

  console.log("Listening at http://localhost:" + port + "/api");
});
