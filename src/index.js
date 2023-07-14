import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import productsRouter from "./routes/products.js";
import categoriesRouter from "./routes/categories.js";
import userRouter from "./routes/auth.js";
import orderRouter from "./routes/order.js";
import sizeRouter from "./routes/size.js";
import colorRouter from "./routes/color.js";
import statusRouter from "./routes/status.js";
import commentRouter from "./routes/comment.js";

import { connectOnlDB, connectLocalDB } from "./config/connect.js";

const app = express();
const port = 8080
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
app.use("/api", commentRouter);

mongoose.set('strictQuery', false);
// mongodb local
// connectLocalDB();

// mongodb onl
connectOnlDB();

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})