import jwt from "jsonwebtoken";
import { config } from "../config/env";

export function authVerifier(req, res, next) {
    const header = req.headers.authorization;

    if (!header) return res.status(401).json({ error: "No token" });

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, config.accessSecret, { audience: "api", issuer: "auth-server" });

        if (decoded.type !== "access") { throw new Error(); }

        req.user = decoded;
        next();
    }
    catch {
        res.status(401).json({ error: "Invalid token" });
    }

}