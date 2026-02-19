import User from "../models/user.js"
import Session from "../models/session.js"
import { createAccessToken, createRefreshToken } from "../utils/tokens.js"

export async function registerController(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Credentials Missing" });

    const user = await User.create({ email, password });

    res.json({ id: user._id });
}

export async function loginController(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Credentials Missing" })

    const user = await User.findOne({ email });

    if (!user || !(password == user.password)) return res.status(401).json({ error: "Invalid credentials" });

    const access = createAccessToken(user);
    const refresh = createRefreshToken();

    await Session.create({ user: user._id, refreshToken: refresh, userAgent: req.headers["user-agent"], expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) });

    res.cookie("refresh", refresh, { httpOnly: true, secure: false, sameSite: "strict" });

    res.json({ access });

}