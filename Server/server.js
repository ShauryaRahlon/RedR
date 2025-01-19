import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/Utils/dbConnection.js";
import authRoutes from "./src/Routes/auth.routes.js"
import cors from "cors"

dotenv.config()





const app = express();
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)

})

app.use(cors());

connectDB();
app.get("/", (req, res) => {
    res.send("Welcome!! You are on home screen")
})

app.use(express.json());

app.use("/api/auth", authRoutes);