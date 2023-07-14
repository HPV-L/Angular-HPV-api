import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import productsRouter from "./src/routes/products.js";
import categoriesRouter from "./src/routes/categories.js";
import userRouter from "./src/routes/auth.js";
import orderRouter from "./src/routes/order.js";
import sizeRouter from "./src/routes/size.js";
import colorRouter from "./src/routes/color.js";
import statusRouter from "./src/routes/status.js";
import commentRouter from "./src/routes/comment.js";

import { connectOnlDB, connectLocalDB } from "./src/config/connect.js";

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