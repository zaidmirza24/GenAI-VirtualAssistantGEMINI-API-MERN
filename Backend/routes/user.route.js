import express from "express"
import { Router } from "express"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multer.js"

import { askToAssistant, getCurrentUser, updateAssistant } from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.get("/current",isAuth,getCurrentUser)
userRouter.post("/update",isAuth,upload.single("assistantImage"),updateAssistant)
userRouter.post("/asktoassistant",isAuth,askToAssistant)

export default userRouter;