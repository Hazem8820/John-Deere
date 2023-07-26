import express from "express"
import { Bootstrap } from "./Src/App.Router.js"
const app = express()
const port = 8000

Bootstrap(app, express)

app.listen(port, () => console.log(`Example app listening on port .............. ${port}!`))