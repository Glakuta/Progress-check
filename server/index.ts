import express from "express";
import router from "./routes/getUsers";
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
