import "dotenv/config"

export const config = {
    port: process.env.PORT,
    mongo: process.env.MONGO_URI,
    accessSecret: process.env.ACCESS_SECRET,
    refreshSecret: process.env.REFRESH_SECRET
}
