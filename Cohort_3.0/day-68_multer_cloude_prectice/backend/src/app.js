import express from "express"
import postRoute from "./routes/post.routes.js"
import upload from "./middleware/multer.js"
import cors from 'cors'



const app = express()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
}))

//?  for single image
// app.use("/api",upload.single("image"),postRoute)

//  ? for multiple image
app.use("/api",upload.array("images",5),postRoute)


export default app