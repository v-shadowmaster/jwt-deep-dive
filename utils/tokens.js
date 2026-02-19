import { config } from "../config/env.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

// access token 
export function createAccessToken(user) {
    if (!config || !config.accessSecret) throw new Error("ACCESS_SECRET is not set. Set ACCESS_SECRET in your environment or config/env.js");
    return jwt.sign({ sub: user.id, role: user.role, type: "access" }, config.accessSecret, { expiresIn: "15m", issuer: "auth-server", audience: "api" });
}

// refresh token 
export function createRefreshToken() {
    return crypto.randomBytes(64).toString("hex");
}