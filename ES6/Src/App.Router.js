import { noteRouter } from "./Modules/Note/Note.Router.js"
import { userRouter } from "./Modules/User/User.Router.js"
import cors from 'cors'

export const Bootstrap = (app, express) => {
    app.use(express.json())
    app.use(cors())
    app.use('/user', userRouter)
    app.use('/note', noteRouter)
}
