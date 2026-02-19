import jwt from "jsonwebtoken";

const accessTokenSecret = "cfb0d7cb7a7b44b092b479b195ef128f"
const refreshTokenSecret = "9b516ea91fce475ca55ac394eac5e079"

let user = { id: 123 }

function generateAccessToken(user) {
    return jwt.sign({ user: user.id, role: "admin", type: "access" }, accessTokenSecret, { expiresIn: "15m", audience: "api" })
}

function generateRefreshToken(user) {
    return jwt.sign({ user: user.id, type: "refresh" }, refreshTokenSecret, { expiresIn: "30d", audience: "auth" })
}

function grantUserTokens(user) {
    return { accessToken: generateAccessToken(user), refreshToken: generateRefreshToken(user) }
}



console.log(grantUserTokens(user))