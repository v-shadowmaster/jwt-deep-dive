import User from "../models/user.js"

export async function registerController(req, res) {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    res.json({ id: user._id });
}

export async function loginController(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(password == user.password)) return res.status(401).json({ error: "Invalid credentials" });
}