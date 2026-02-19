import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    refreshToken: String,
    ip: { type: String, default: "localhost:5172" },
    userAgent: String,
    device: String,
    expiresAt: Date,
    revoken: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);

