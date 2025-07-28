import { Router } from "express"
import { Login, logout, signUp } from "../controllers/auth.controller.js"

const authRoute = Router()

// signup 
authRoute.post("/signup",signUp)
authRoute.post("/signin",Login)
authRoute.get("/logout",logout)


export default authRoute;