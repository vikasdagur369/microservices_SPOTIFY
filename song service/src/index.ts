import express from "express";
import dotenv from "dotenv";
import songsRoute from "./route.js";

dotenv.config();
express.json();

const app = express();

const port = process.env.PORT;

app.use("/api/v1", songsRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
