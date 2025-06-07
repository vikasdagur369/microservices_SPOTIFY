import express from "express";
import dotenv from "dotenv";
import songsRoute from "./route.js";
import redis from "redis";
import cors from 'cors'

dotenv.config();
const app = express()
app.use(cors());

export const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: "redis-10605.crce206.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 10605,
  },
});

redisClient
  .connect()
  .then(() => console.log("Connected to redis"))
  .catch(console.error);



const port = process.env.PORT;

app.use("/api/v1", songsRoute);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
