import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"


const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("Authentication System API is running 🚀");
});

app.use("/api/auth",authRouter)

export default app
