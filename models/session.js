import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    refreshToken: String,
    ip: String,
    userAgent: String,
    device: String,
    expiresAt: Date,
    revoken: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Session", sessionSchema);

