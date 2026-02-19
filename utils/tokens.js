import { config } from "dotenv";
import jwt from "jsonwebtoken";
import crypto from "crypto";

// access token 
export function createAccessToken(user) {
    return jwt.sign({ sub: user.id, role: user.role, type: "access" }, config.accessSecret, { expiresIn: "15m", issuer: "auth-server", audience: "api" });
}

// refresh token 
export function createRefreshToken() {
    return crypto.randomBytes(64).toString("hex");
}