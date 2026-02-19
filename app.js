import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import { authVerifier } from "./middleware/auth.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);

export default app;