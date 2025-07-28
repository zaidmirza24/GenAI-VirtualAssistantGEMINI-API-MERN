import express from "express"
import dotenv from "dotenv"
import connectDB  from "./config/db.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import geminiResponse from "./gemini.js"
dotenv.config()



const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
// auth Route 
app.use("/api/auth",authRoute) 
app.use("/api/user",userRouter)

app.get('/',async(req,res)=>{
    let prompt = req.query.prompt;
    let data = await geminiResponse(prompt)
    res.json(data)
})


app.listen(port,()=>{ 
    connectDB()
    console.log("Listening on port...",port)
})