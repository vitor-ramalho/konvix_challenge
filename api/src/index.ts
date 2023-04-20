import express from "express";
import { PrismaClient } from "@prisma/client";
import { router } from "./router";
import cors from 'cors';

// use `prisma` in your application to read and write data in your DB
const app = express();
export const prisma = new PrismaClient();

app.use(cors());  
app.use(express.json());
app.use(router);

app.listen(3002, () => {
  console.log(`Server is running on port 3002`);
});
