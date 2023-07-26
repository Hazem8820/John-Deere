import { Router } from "express"
import * as userLogic from "./controller/User.js"

export const userRouter = Router()

userRouter.get('/', userLogic.getUsers)
userRouter.post('/signup', userLogic.signup)
userRouter.post('/signin', userLogic.signin)
userRouter.put('/update/:id', userLogic.updateUser)
userRouter.delete('/delete/:id', userLogic.deleteUser)
userRouter.get('/search/:char/:age', userLogic.searchUser)
userRouter.get('/searchid/:id', userLogic.searchById)
userRouter.get('/searchage/:age1/:age2', userLogic.searchByAge)
userRouter.get('/oldest', userLogic.getOldest)
