import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import productsRouter from "./routes/products";
import categoriesRouter from "./routes/categories";
import userRouter from "./routes/auth";
import orderRouter from "./routes/order";
import sizeRouter from "./routes/size";
import colorRouter from "./routes/color";
import statusRouter from "./routes/status";

import { connectOnlDB, connectLocalDB } from "./config/connect";

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api", productsRouter);
app.use("/api", categoriesRouter);
app.use("/api", userRouter);
app.use("/api", orderRouter);
app.use("/api", sizeRouter);
app.use("/api", colorRouter);
app.use("/api", statusRouter);

mongoose.set('strictQuery', false);
// mongodb local
// connectLocalDB();

// mongodb onl
connectOnlDB();

export const viteNodeApp = app;
