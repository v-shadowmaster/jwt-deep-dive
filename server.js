import mongoose from "mongoose";
import app from "./app.js";
import { config } from "./config/env.js"

await mongoose.connect(config.mongo);

app.listen(config.port, () => {
    console.log("Server running");
});
